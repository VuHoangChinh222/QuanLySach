function ShowSystemManagement() {
  return (
    <div>
      <h3>
        <strong>Danh sách tài khoản trong hệ thống</strong>
      </h3>
      <button className="taomoi"> + Tạo mới</button>
      <div className="card">
        <table className="table">
          <thead className="table-title">
            <tr className="text">
              <th>Id</th>
              <th>Tên đăng nhập</th>
              <th>Mật khẩu</th>
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
              <td>Đọc học</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nguyễn Văn A</td>
              <td>Đọc học</td>
              <td>Đọc học</td>
              <td>Đọc học</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nguyễn Văn A</td>
              <td>Đọc học</td>
              <td>Đọc học</td>
              <td>Đọc học</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Nguyễn Văn A</td>
              <td>Sách tâm lý</td>
              <td>Đọc học</td>
              <td>Đọc học</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ShowSystemManagement;
