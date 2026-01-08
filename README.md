# 🍔 Food Ordering E-commerce Platform

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

> A full-stack web application designed to streamline the online food ordering process. Featuring secure payments, real-time caching, and a containerized deployment pipeline.

---

## 📖 Introduction

This project is a comprehensive **Food Ordering System** built to handle complex e-commerce workflows. It bridges the gap between customers and food vendors with a secure, high-performance backend and a responsive frontend.

The system is engineered to handle high traffic using **Redis** for caching and rate limiting, and ensures secure transactions via **VNPay** integration.

### 🎥 Live Demo / Screenshots
*(Place your screenshots or GIFs here. Examples:)*
| Home Page | Menu & Cart | Admin Dashboard |
|:---:|:---:|:---:|
| ![Home](https://via.placeholder.com/300x150?text=Home+Page) | ![Cart](https://via.placeholder.com/300x150?text=Cart+UI) | ![Admin](https://via.placeholder.com/300x150?text=Admin+Dashboard) |

---

## 🛠️ Tech Stack

### Backend
* **Core:** Java 17, Spring Boot 3
* **Database:** PostgreSQL (Primary), Redis (Caching & Locking)
* **Security:** Spring Security, JWT (Access/Refresh Tokens), BCrypt
* **Payment:** VNPay Gateway (HMAC SHA512)

### Frontend
* **Framework:** React 18
* **HTTP Client:** Axios
* **Media:** Cloudinary (Image Management)

### DevOps & Tools
* **Containerization:** Docker, Docker Compose
* **CI/CD:** GitHub Actions
* **Monitoring:** Prometheus, Grafana
* **Server:** Nginx

---

## 🚀 Key Features

### 🔐 Security & Authentication
* **Role-Based Access Control (RBAC):** Distinct flows for Admin, Staff, and Customer.
* **Advanced Auth:** JWT implementation with Token Blacklisting (via Redis) and OTP verification.
* **Rate Limiting:** Protects APIs from spam/abuse using Redis.

### 🛒 Order Management
* Complete workflow: Browse Product -> Add to Cart -> Checkout -> Payment -> Order Tracking.
* Real-time inventory checks using **Distributed Locking** (Redis) to prevent over-selling.

### 💳 Payment Integration
* Seamless integration with **VNPay**.
* Secure webhook handling with checksum validation (HMAC SHA512) to ensure data integrity.

### ⚡ Performance
* **Redis Caching:** Accelerates product retrieval and session management.
* **Optimized Queries:** Spring Data JPA with efficient indexing.

---

## 🏗️ System Architecture

This project follows a **Layered Architecture** to ensure separation of concerns and maintainability.

```mermaid
graph TD
    Client[React Frontend] -->|REST API| Nginx[Nginx Load Balancer]
    Nginx -->|Proxy| API[Spring Boot Backend]
    API -->|Read/Write| DB[(PostgreSQL)]
    API -->|Cache/Lock| Cache[(Redis)]
    API -->|Payment| VNPay[VNPay Gateway]
    API -->|Images| Cloud[Cloudinary]

⚡ Installation & SetupPrerequisitesJava 17+Node.js & npmDocker & Docker ComposeOption 1: Quick Start with Docker (Recommended)The entire system (Database, Redis, Backend, Frontend) can be spun up with a single command.Bash# 1. Clone the repository
git clone [https://github.com/haolor/food-ordering-ecommerce.git](https://github.com/haolor/food-ordering-ecommerce.git)
cd food-ordering-ecommerce

# 2. Build and run containers
docker-compose up --build -d
Option 2: Manual Setup1. Backend SetupBashcd backend
# Update application.properties with your DB/Redis/Cloudinary credentials
./mvnw clean install
./mvnw spring-boot:run
2. Frontend SetupBashcd frontend
npm install
npm run dev
🧪 TestingUnit Testing: JUnit 5 integration for Service and Repository layers.API Testing: Postman collection available in /docs/postman_collection.json.👥 ContributorsThis project was developed by a team of 4 dedicated engineers:NameRoleGitHubDang Minh Hao (Me)Backend Lead & System Design@haolorTran Trung KienFrontend DeveloperNguyen Ba Vu KhoaBackend DeveloperVu Van MinhDevOps & Testing📝 LicenseThis project is licensed under the MIT License - see the LICENSE file for details.<p align="center">Built with ❤️ by Dang Minh Hao</p>
### Những điểm cần lưu ý để file này "chạy" tốt:

1.  **Ảnh Demo:** Phần `![Home](...)` là các placeholder. Bạn **bắt buộc** phải chụp màn hình dự án (3 tấm: Trang chủ, Giỏ hàng, Trang Admin), lưu vào folder `/images` trong code rồi thay link vào đó. Nếu không có ảnh, người ta sẽ lười đọc.
2.  **Sơ đồ Mermaid:** Đoạn code `mermaid` mình viết ở trên sẽ tự động vẽ ra sơ đồ kiến trúc nếu GitHub hiển thị. Nó giúp bạn trông rất "kỹ thuật" và hiểu sâu về hệ thống.
3.  **Thay Link Git:** Ở đoạn `git clone`, nhớ thay bằng link repo thật của bạn.

Bạn có cần mình viết nốt file `README.md` cho dự án "Ecommerce - Clothes Store" không