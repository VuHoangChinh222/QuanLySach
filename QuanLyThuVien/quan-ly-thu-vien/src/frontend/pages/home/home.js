function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>5</h3>
                <p>Độc giả</p>
              </div>
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>10</h3>
                <p>Sách</p>
              </div>
              <div className="icon">
                <i className="fas fa-book"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>7</h3>
                <p>Tài khoản</p>
              </div>
              <div className="icon">
                <i className="fas fa-users-cog"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>33</h3>
                <p>Lượt mượn sách</p>
              </div>
              <div className="icon">
                <i className="fas fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Sách mới</h3>
                <a href="#" className="btn float-right">
                  Xem tất cả
                </a>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tên sách</th>
                      <th>Tác giả</th>
                      <th>Thể loại</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>KỶ NGUYÊN THÔNG TIN CỦA LOÀI NGƯỜI</td>
                      <td>Nguyễn Văn A</td>
                      <td>Đọc học</td>
                    </tr>
                    <tr>
                      <td>HELLO RUBY</td>
                      <td>Nguyễn Văn A</td>
                      <td>Đọc học</td>
                    </tr>
                    <tr>
                      <td>NEXUS</td>
                      <td>Nguyễn Văn A</td>
                      <td>Đọc học</td>
                    </tr>
                    <tr>
                      <td>KẾT NỐI NGHỆ SĨ VỀ TÌNH YÊU</td>
                      <td>Nguyễn Văn A</td>
                      <td>Sách tâm lý</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Thành viên mới</h3>
                <a href="#" className="btn float-right">
                  Xem tất cả
                </a>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <img src="img/IMG_8390.JPG" className="avt" alt="Avatar" />
                    <div className="user-info">
                      <span className="email">bb@gmail.com</span>
                      <span className="role">Độc giả</span>
                    </div>
                    <div className="actions">
                      <i className="fas fa-user"></i>
                      <i className="fas fa-comment"></i>
                      <i className="fas fa-phone"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;