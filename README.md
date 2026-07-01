# Todo App - Ứng dụng Quản lý Công việc Hiện đại

Đây là một ứng dụng **Fullstack To-do App** trực quan, hiện đại và tối ưu, được xây dựng theo kiến trúc Client-Server. Dự án sử dụng **Node.js, Express, MongoDB** ở Backend và **React, Vite, Tailwind CSS v4** ở Frontend.

---

## Tính năng nổi bật

- **Quản lý công việc (CRUD):** Thêm mới, cập nhật trạng thái và xóa các nhiệm vụ dễ dàng.
- **Bộ lọc thông minh:**
  - **Theo trạng thái:** Tất cả (All), Đang làm (Doing), Đã hoàn thành (Completed).
  - **Theo thời gian tạo:** Hôm nay (Today), Tuần này (This Week), Tháng này (This Month), Tất cả thời gian (All).
- **Phân trang (Pagination):** Hỗ trợ phân tách danh sách công việc thành các trang (mặc định giới hạn hiển thị 4 công việc trên mỗi trang) giúp giao diện gọn gàng.
- **Giao diện hiện đại (Premium Dark UI):** Thiết kế tối giản, tone nền tối chủ đạo, hiệu ứng lưới (Grid), radial glow cùng các thông báo Toast sinh động (sử dụng Sonner).
- **Phản hồi tức thì:** Đồng bộ hóa dữ liệu nhanh chóng giữa giao diện và cơ sở dữ liệu qua các cuộc gọi API Axios.

---

## Công nghệ sử dụng

### **Backend**
- **Node.js** & **Express**: Xây dựng hệ thống RESTful API dưới dạng ES Modules (`"type": "module"`).
- **MongoDB** & **Mongoose**: Cơ sở dữ liệu phi quan hệ (NoSQL) và thư viện mô hình hóa dữ liệu (Object Data Modeling - ODM).
- **Nodemon**: Tự động tải lại server khi có thay đổi trong mã nguồn trong quá trình phát triển.
- **dotenv**: Quản lý biến môi trường bảo mật.
- **CORS**: Cho phép liên kết và chia sẻ tài nguyên giữa Client và Server.

### **Frontend**
- **React 19**: Thư viện xây dựng giao diện người dùng dựa trên Component.
- **Vite**: Công cụ build ứng dụng nhanh vượt trội.
- **Tailwind CSS v4**: Framework CSS tiên tiến mang lại khả năng tùy biến giao diện linh hoạt.
- **Radix UI & Base UI**: Các thư viện Component không định hình (headless components) giúp xây dựng giao diện tối ưu và dễ tiếp cận.
- **Axios**: Quản lý và thực hiện các yêu cầu HTTP API.
- **Sonner**: Thư viện hiển thị Toast thông báo đẹp mắt và mượt mà.
- **Lucide React**: Bộ sưu tập biểu tượng (icon) sắc nét, hiện đại.

---

## Cấu trúc thư mục dự án

```text
todoapp/
├── backend/                  # Mã nguồn Backend (Express API)
│   ├── src/
│   │   ├── config/           # Cấu hình kết nối DB (MongoDB)
│   │   ├── controllers/      # Hàm xử lý logic nghiệp vụ cho Tasks
│   │   ├── models/           # Mongoose Model định nghĩa cấu trúc dữ liệu Task
│   │   ├── routes/           # Định tuyến các endpoints API
│   │   └── server.js         # Điểm khởi chạy Express server
│   ├── .env                  # Cấu hình biến môi trường của Backend
│   └── package.json
│
├── frontend/                 # Mã nguồn Frontend (React + Vite)
│   ├── src/
│   │   ├── components/       # Các components UI (Header, Footer, TaskList, AddTask, v.v.)
│   │   ├── lib/              # Cấu hình Axios, dữ liệu tĩnh (Constants)
│   │   ├── pages/            # Các trang chính (HomePage, NotFound)
│   │   ├── App.jsx           # Component gốc định tuyến
│   │   ├── main.jsx          # Điểm gắn kết React vào DOM
│   │   └── index.css         # CSS chính và cấu hình Tailwind
│   ├── tailwind.config.js    # Cấu hình Tailwind CSS
│   ├── vite.config.js        # Cấu hình Vite
│   └── package.json
│
├── package.json              
└── README.md                 
```

---

## Hướng dẫn cài đặt và chạy ứng dụng

### **1. Chuẩn bị trước**
Đảm bảo máy tính của bạn đã được cài đặt:
- **Node.js** (Phiên bản v18 trở lên được khuyến nghị)
- **MongoDB** (Một thực thể chạy ở máy cục bộ hoặc tài khoản MongoDB Atlas trực tuyến)

### **2. Cấu hình biến môi trường Backend**
Tạo hoặc chỉnh sửa tệp `.env` nằm trong thư mục `backend/` với nội dung tương tự sau:

```env
MONGODB_CONNECTIONSTRING=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
```
*(Thay thế `your_mongodb_connection_string` bằng URI kết nối cơ sở dữ liệu MongoDB thực tế của bạn).*

---

### **3. Chạy trong môi trường Phát triển (Development)**

Bạn cần mở 2 cửa sổ terminal riêng biệt để khởi động đồng thời cả Backend và Frontend:

#### **Khởi chạy Backend:**
```bash
cd backend
npm install
npm run dev
```
Server backend sẽ chạy tại: [http://localhost:5001](http://localhost:5001)

#### **Khởi chạy Frontend:**
```bash
cd frontend
npm install
npm run dev
```
Giao diện frontend sẽ chạy tại: [http://localhost:5173](http://localhost:5173)

---

### **4. Chạy trong môi trường Production (Build & Start)**

Để tối ưu hóa hiệu năng, bạn có thể build phiên bản sản xuất của frontend và phục vụ toàn bộ ứng dụng chỉ bằng một server Node.js duy nhất từ backend:

1. **Cập nhật biến môi trường** trong `backend/.env`:
   ```env
   NODE_ENV=production
   ```

2. **Chạy các lệnh sau tại thư mục gốc (root) của dự án:**
   ```bash
   # Cài đặt toàn bộ dependencies ở cả hai phía và build frontend
   npm run build

   # Khởi chạy ứng dụng bằng server sản xuất
   npm run start
   ```

Ứng dụng sẽ hoạt động tại cổng đã cấu hình (mặc định là [http://localhost:5001](http://localhost:5001)), trong đó Express server sẽ phục vụ trực tiếp các file tĩnh của Frontend tại thư mục `frontend/dist`.

---

## Các Endpoints API Chính

Tất cả các endpoints API của hệ thống đều bắt đầu bằng tiền tố `/api/tasks`.

| Phương thức | Endpoint | Mô tả | Chi tiết Query/Body |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/tasks` | Lấy danh sách nhiệm vụ | Query params: `filter=today` (hoặc `week`, `month`, `all`) |
| **POST** | `/api/tasks` | Thêm một nhiệm vụ mới | Body JSON: `{ "title": "Tên nhiệm vụ" }` |
| **PUT** | `/api/tasks/:id` | Cập nhật thông tin nhiệm vụ | Body JSON: `{ "title": "...", "status": "active/complete", "completedAt": "..." }` |
| **DELETE** | `/api/tasks/:id` | Xóa một nhiệm vụ | Tham số đường dẫn `:id` là ID của nhiệm vụ cần xóa |

---

