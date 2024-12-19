import { Link } from "react-router-dom";
function ShowBookManagement() {
  return (
    <div>
      <h3>
        <strong>Quản lý kho sách</strong>
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
              placeholder="Tìm kiếm...."
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
              <th>Hình ảnh</th>
              <th>Mã sách</th>
              <th>Tên sách</th>
              <th>Tác giả</th>
              <th>Thể loại</th>
              <th>Số lượng</th>
              <th>Giá sách</th>
              <th>Ngày nhập</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ảnh</td>
              <td>2</td>
              <td>Sách giáo khoa</td>
              <td>Nguyen Van A</td>
              <td>Sách giáo khoa</td>
              <td>100</td>
              <td>80.000</td>
              <td>22/11/2024</td>
              <td>
                <Link to = "Sua">
                  <i className="fas fa-wrench iconspacing"></i> 
                </Link>
                  <i className="fas fa-trash iconspacing"></i> 
                
              </td>
            </tr>
            <tr>
              <td>Ảnh</td>
              <td>2</td>
              <td>Sách giáo khoa</td>
              <td>Nguyen Van A</td>
              <td>Sách giáo khoa</td>
              <td>100</td>
              <td>80.000</td>
              <td>22/11/2024</td>
              <td>
                <Link to = "Sua">
                  <i className="fas fa-wrench iconspacing"></i> 
                </Link>
                  <i className="fas fa-trash iconspacing"></i>
                
              </td>
            </tr>
            <tr>
              <td>Ảnh</td>
              <td>2</td>
              <td>Sách giáo khoa</td>
              <td>Nguyen Van A</td>
              <td>Sách giáo khoa</td>
              <td>100</td>
              <td>80.000</td>
              <td>22/11/2024</td>
              <td>
                <Link to = "Sua">
                  <i className="fas fa-wrench iconspacing"></i> 
                </Link>
                  <i className="fas fa-trash iconspacing"></i> 
                
              </td>
            </tr>
            <tr>
              <td>Ảnh</td>
              <td>2</td>
              <td>Sách giáo khoa</td>
              <td>Nguyen Van A</td>
              <td>Sách giáo khoa</td>
              <td>100</td>
              <td>80.000</td>
              <td>22/11/2024</td>
              <td>
                <Link to = "Sua">
                  <i className="fas fa-wrench iconspacing"></i> 
                </Link>
                  <i className="fas fa-trash iconspacing"></i> 
                
                  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowBookManagement;
