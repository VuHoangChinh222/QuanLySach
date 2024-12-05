import Home from "../frontend/pages/home/home";
import NotFound from "../frontend/pages/notFound/notFound";
//Reader
import ShowReaderManagement from "../frontend/pages/readerManagement/show";
import AddReaderManagement from "../frontend/pages/readerManagement/add";
import EditReaderManagement from "../frontend/pages/readerManagement/edit";
//System
import ShowSystemManagement from "../frontend/pages/systemManagement/show";
const FrontEndRoute = [
  { path: "/", component: Home },
  { path: "/*", component: NotFound },

  //Reader
  { path: "/QuanLyDocGia", component: ShowReaderManagement },
  { path: "/QuanLyDocGia/Them", component: AddReaderManagement },
  { path: "/QuanLyDocGia/Sua", component: EditReaderManagement },
  //System
  { path: "/QuanLyHeThong", component: ShowSystemManagement },
];

export default FrontEndRoute;
