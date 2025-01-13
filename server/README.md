# E-Commerce Backend

## Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js
- cors: Middleware for enabling CORS (Cross-Origin Resource Sharing)
- dotenv: Loads environment variables from a `.env` file into `process.env`
- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment
- cloudinary: Cloud-based image and video management services
- multer: Middleware for handling `multipart/form-data`, which is primarily used for uploading files
- fs: File system module to interact with the file system
- path: Utilities for working with file and directory paths

## Routes

### User Routes

#### POST /api/user/register
Registers a new user.

**Example Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### POST /api/user/login
Logs in an existing user.

**Example Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Product Routes

#### POST /api/product/add
Adds a new product. Requires admin authentication and file uploads.

**Example Request:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": "100",
  "category": "Category",
  "subCategory": "SubCategory",
  "sizes": "[\"S\", \"M\", \"L\"]",
  "bestSeller": "true"
}
```
**Example File Upload:**
```
image1: file1.jpg
image2: file2.jpg
image3: file3.jpg
image4: file4.jpg
```

#### POST /api/product/remove
Removes an existing product. Requires admin authentication.

**Example Request:**
```json
{
  "id": "product_id"
}
```

#### POST /api/product/single
Fetches a single product by ID.

**Example Request:**
```json
{
  "productId": "product_id"
}
```

#### GET /api/product/list
Lists all products.

**Example Response:**
```json
{
  "success": true,
  "products": [
    {
      "name": "Product Name",
      "description": "Product Description",
      "price": 100,
      "category": "Category",
      "subCategory": "SubCategory",
      "sizes": ["S", "M", "L"],
      "bestSeller": true,
      "image": ["url1", "url2", "url3", "url4"],
      "date": "2023-10-01T00:00:00.000Z"
    }
  ]
}
```

## Middlewares

### adminAuth
Middleware to check if the user is an admin.

**Usage:**
```javascript
import { adminAuth } from '../middleware/adminAuthMW.js';

productRouter.post('/add', adminAuth, upload.fields([...]), addProduct);
```

### multer
Middleware for handling file uploads.

**Usage:**
```javascript
import upload from '../middleware/multerMW.js';

productRouter.post('/add', upload.fields([...]), addProduct);
```
