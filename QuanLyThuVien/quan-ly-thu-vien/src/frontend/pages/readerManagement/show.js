import { Link, Outlet } from "react-router-dom";
function ShowReaderManagement() {
  return (
    <div>
      <h3>
        <strong>Quản lý độc giả</strong>
      </h3>
      <div className="row">
        <div className="col-md-6">
          <Link to="Them">
            <button className="taomoi"> + Tạo mới</button>
          </Link>
        </div>
        <div className="col-md-6">
          <div className="search-dg">
            <input
              type="text"
              className="search-txt-dg"
              id="searchInput"
              placeholder="Tìm kiếm theo tên, email,...."
            />
            <button className="search-btn-dg">
              <p className="btn-sr">Search</p>
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead className="table-title">
            <tr className="text">
              <th>Mã độc giả</th>
              <th>Mã sinh viên</th>
              <th>Tên độc giả</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>sv02</td>
              <td>Nguyen Van A</td>
              <td>Nam</td>
              <td>03/07/2000</td>
              <td>HCM</td>
              <td>0912436787</td>
              <td>@gmail.com</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>sv02</td>
              <td>Nguyen Van A</td>
              <td>Nam</td>
              <td>03/07/2000</td>
              <td>HCM</td>
              <td>0912436787</td>
              <td>@gmail.com</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>sv02</td>
              <td>Nguyen Van A</td>
              <td>Nam</td>
              <td>03/07/2000</td>
              <td>HCM</td>
              <td>0912436787</td>
              <td>@gmail.com</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>sv02</td>
              <td>Nguyen Van A</td>
              <td>Nam</td>
              <td>03/07/2000</td>
              <td>HCM</td>
              <td>0912436787</td>
              <td>@gmail.com</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowReaderManagement;
