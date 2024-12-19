import { Link } from "react-router-dom";
function ShowSystemManagement() {
  return (
    <div>
      <h3>
        <strong>Danh sách tài khoản trong hệ thống</strong>
      </h3>
        <Link to="Them">
            <button className="taomoi"> + Tạo mới</button>
          </Link>
      <div className="card">
        <table className="table">
          <thead className="table-title">
            <tr className="text">
              <th>Id</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nguyễn Văn A</td>
              <td>Đọc học</td>
              <td>Đọc học</td>
              <td>
                <Link to = "Sua">
                  <i className="fas fa-wrench iconspacing"></i> 
                </Link>
                  <i className="fas fa-trash "></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nguyễn Văn A</td>
              <td>Đọc học</td>
              <td>Đọc học</td>
              <td>
                <Link to = "Sua">
                  <i className="fas fa-wrench iconspacing"></i> 
                </Link>
                  <i className="fas fa-trash "></i> 
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nguyễn Văn A</td>
              <td>Đọc học</td>
              <td>Đọc học</td>
              <td>
                <Link to = "Sua">
                  <i className="fas fa-wrench iconspacing"></i> 
                </Link>
                  <i className="fas fa-trash "></i> 
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Nguyễn Văn A</td>
              <td>Sách tâm lý</td>
              <td>Đọc học</td>
              <td>
                <Link to = "Sua">
                  <i className="fas fa-wrench iconspacing"></i> 
                </Link>
                  <i className="fas fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ShowSystemManagement;
