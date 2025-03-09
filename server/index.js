const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("book-management");
    const booksCollection = db.collection("books");
    // 📌 Create a Book (POST)
    app.post("/books", async (req, res) => {
      try {
        const book = await booksCollection.insertOne(req.body);
        res.status(201).json(book);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // 📌 Get Books with Pagination, Filtering, and Sorting (GET)
    app.get("/books", async (req, res) => {
      try {
        const {
          page,
          limit,
          genre,
          minYear,
          maxYear,
          author,
          minPrice,
          maxPrice,
          sortBy,
          order,
          search,
        } = req.query;

        const currentPage = Math.max(1, parseInt(page) || 1);
        const perPage = parseInt(limit) || 10;
        const skip = (currentPage - 1) * perPage;

        // Build filter object
        const filter = {};

        if (search) {
          filter.$or = [
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } }
          ];
        }

        if (genre) filter.genre = genre;
        if (minYear || maxYear) {
          filter.publishedYear = {
            ...(minYear && { $gte: parseInt(minYear) }),
            ...(maxYear && { $lte: parseInt(maxYear) })
          };
        }
        if (author) filter.author = { $regex: author, $options: "i" };
        if (minPrice || maxPrice) {
          filter.price = {
            ...(minPrice && { $gte: parseFloat(minPrice) }),
            ...(maxPrice && { $lte: parseFloat(maxPrice) })
          };
        }

        // Sort options
        const sortOptions = { [sortBy || 'title']: order === 'desc' ? -1 : 1 };

        // Execute queries in parallel for better performance
        const [books, totalBooks] = await Promise.all([
          booksCollection
            .find(filter)
            .sort(sortOptions)
            .skip(skip)
            .limit(perPage)
            .toArray(),
          booksCollection.countDocuments(filter)
        ]);

        res.json({
          books,
          totalBooks,
          currentPage,
          totalPages: Math.ceil(totalBooks / perPage)
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });


    // 📌 Get Book by ID (GET)
    app.get("/books/:id", async (req, res) => {
      const bookId =req.params.id;
      // console.log(bookId)
      try {
        const book = await booksCollection.findOne({
          _id: new ObjectId(bookId),
        });
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // 📌 Update Book (PUT)
    app.put("/books/:id", async (req, res) => {
      try {
        const updatedBook = await booksCollection.updateOne(
          { _id: new ObjectId(req.params.id) },
          { $set: req.body }
        );
        res.json(updatedBook);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // 📌 Delete Book (DELETE)
    app.delete("/books/:id", async (req, res) => {
      try {
        await booksCollection.deleteOne({
          _id: new ObjectId(req.params.id),
        });
        res.json({ message: "Book deleted" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Book Management System API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
