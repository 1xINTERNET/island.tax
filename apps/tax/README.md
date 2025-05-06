# Island Tax Return Backend
This is a backend service for managing tax returns, users, incomes, assets, and liabilities.

## Package manager
Use Yarn@1.22.22

## Build and running the project
You should use [Docker](https://www.docker.com/) to build and run the project.
1. Build the image:
```bash
docker build -t island-tax-return-backend:latest .
```
2. Run the container:
```bash
docker run -p 3000:3000 --env-file .env island-tax-return-backend:latest
```


## API Endpoints & Usage

This backend API provides CRUD operations for users, tax returns, incomes, assets, and liabilities. All endpoints accept and return JSON.  
**Base URL:** `http://localhost:3000/`

---

### Health Check

- **GET /**  
  Returns:
  ```
  Backend up and running!
  ```

---

### Users

#### Create User

- **POST /users**  
  **Payload:**
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe",
    "password": "yourPassword"
  }
  ```
  **Response:** created User object

#### Get All Users

- **GET /users**  
  **Response:** Array of users

#### Get User by ID

- **GET /users/{id}**

#### Update User

- **PATCH /users/{id}**  
  **Payload:**
  ```json
  {
    "name": "Updated Name",
    "password": "newPassword"
  }
  ```

#### Delete User

- **DELETE /users/{id}**

---

### Tax Returns

#### Create Tax Return

- **POST /tax-returns**  
  **Payload:**
  ```json
  {
    "userId": 1,
    "year": 2023,
    "status": "draft"
  }
  ```

#### Get All Tax Returns

- **GET /tax-returns**

#### Get Tax Return by ID

- **GET /tax-returns/{id}**

#### Update Tax Return

- **PATCH /tax-returns/{id}**  
  **Payload:**
  ```json
  {
    "year": 2024,
    "status": "submitted"
  }
  ```

#### Delete Tax Return

- **DELETE /tax-returns/{id}**

---

### Incomes

#### Create Income

- **POST /incomes**  
  **Payload:**
  ```json
  {
    "taxReturnId": 1,
    "amount": 100000,
    "description": "Salary"
  }
  ```

#### Endpoints:
- **GET /incomes** — fetch all incomes
- **GET /incomes/{id}** — get specific income
- **PATCH /incomes/{id}** — update
- **DELETE /incomes/{id}** — delete

---

### Assets

#### Create Asset

- **POST /assets**  
  **Payload:**
  ```json
  {
    "taxReturnId": 1,
    "value": 2500000,
    "type": "Real Estate",
    "description": "Home in Reykjavik"
  }
  ```

#### Endpoints:
- **GET /assets**
- **GET /assets/{id}**
- **PATCH /assets/{id}**
- **DELETE /assets/{id}**

---

### Liabilities

#### Create Liability

- **POST /liabilities**  
  **Payload:**
  ```json
  {
    "taxReturnId": 1,
    "amount": 50000,
    "type": "Mortgage",
    "description": "Home loan"
  }
  ```

#### Endpoints:
- **GET /liabilities**
- **GET /liabilities/{id}**
- **PATCH /liabilities/{id}**
- **DELETE /liabilities/{id}**

---

## Example Usage

Use a tool like [Postman](https://www.postman.com/) to send requests to the above endpoints.  
Ensure the backend server is running at `http://localhost:3000/`.

---

## Notes

- All endpoints expect and return JSON.
- More advanced queries and authentication to be added in future iterations.