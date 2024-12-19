import { Link } from "react-router-dom";
function EditReaderManagement() {
  return (
    <div>
      <h3>
        <strong>Sửa độc giả</strong>
      </h3>
      <div className="form-container">
        <form className="styled-form">
          <div className="form-group">
            <label for="readerName">Tên độc giả</label>
            <input type="text" id="readerName" name="readerName" required />
          </div>
          <div className="form-group">
            <label for="studentID">Mã sinh viên</label>
            <input type="text" id="studentID" name="studentID" required />
          </div>
          <div className="form-group">
            <label for="gender">Giới tính</label>
            <select id="gender" name="gender" required>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div className="form-group">
            <label for="dob">Ngày sinh</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div className="form-group">
            <label for="address">Địa chỉ</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="form-group">
            <label for="phone">Số điện thoại</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-actions">
            <Link to="/QuanLyDocGia">
              <button type="button" className="btn-quaylai">
                Quay lại
              </button>
            </Link>
            <button type="submit" className="btn primary">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditReaderManagement;
