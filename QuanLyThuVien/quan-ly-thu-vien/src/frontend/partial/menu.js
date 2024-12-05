function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link">
        <p className="brand" data-widget="treeview">
          QUAN LY THU VIEN
        </p>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="index.html" className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="QuanLyHeThong.html" className="nav-link">
                <i className="nav-icon fas fa-database"></i>
                <p>Quản lý hệ thống</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="QuanLyKhoSach.html" className="nav-link">
                <i className="nav-icon fas fa-book"></i>
                <p>Quản lý kho sách</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="QuanLyDocGia.html" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>Quản lý độc giả</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="QuanLyMuonTraSach.html" className="nav-link">
                <i className="nav-icon fas fa-file"></i>
                <p>Quản lý mượn trả sách</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="BaoCaoThongKe.html" className="nav-link">
                <i className="nav-icon fas fa-chart-bar"></i>
                <p>Báo cáo thống kê</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="QuanLySachCu.html" className="nav-link">
                <i className="nav-icon fas fa-book-open"></i>
                <p>Quản lý sách cũ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Thoát</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Menu;
