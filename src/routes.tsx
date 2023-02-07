import router from "@mongez/react-router";
import Home from './Component/Home/Home';
import About from './Component/About/About';
router.add('/', Home);
router.add('/About', About);