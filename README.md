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