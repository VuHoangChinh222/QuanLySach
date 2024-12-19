import { Link } from "react-router-dom";
function DetailBookLoanManagement() {
  return (
    <div>
        <Link to="/QuanLyMuonTraSach"><i className="fas fa-arrow-left iconspacing"></i><button className="btn-trove">Quay lại</button></Link>
      <h3><strong>Chi tiết phiếu mượn</strong></h3>
      <hr/>
      <div className="card">
                <table className="table">
                    <thead className="table-title">
                        <tr className="text-qlms">
                            <th>Hình ảnh</th>
                            <th>Mã sách</th>
                            <th>Tên sách</th>
                            <th>Tác giả</th>
                            <th>Thể loại</th>
                            <th>Số lượng mượn</th>
                            <th>Giá sách</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td>34</td>
                            <td>Nguyen Van A</td>
                            <td>11/12/1212</td>
                            <td>11/11/2212</td>
                            <td>Trống</td>
                            <td>Quá hạn trả</td>
                            <td>Quá hạn trả</td>
                        </tr>
                        <tr className="text-center">
                            <td>34</td>
                            <td>Nguyen Van A</td>
                            <td>11/12/1212</td>
                            <td>11/11/2212</td>
                            <td>Trống</td>
                            <td>Quá hạn trả</td>
                            <td>Quá hạn trả</td>
                        </tr>
                        <tr className="text-center">
                            <td>34</td>
                            <td>Nguyen Van A</td>
                            <td>11/12/1212</td>
                            <td>11/11/2212</td>
                            <td>Trống</td>
                            <td>Quá hạn trả</td>
                            <td>Quá hạn trả</td>
                        </tr>
                        <tr className="text-center">
                            <td>34</td>
                            <td>Nguyen Van A</td>
                            <td>11/12/1212</td>
                            <td>11/11/2212</td>
                            <td>Trống</td>
                            <td>Quá hạn trả</td>
                            <td>Quá hạn trả</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  );
}
export default DetailBookLoanManagement;

