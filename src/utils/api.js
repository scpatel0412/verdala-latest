import axios from "axios";

const BASE_URL = "https://verdalastage.bison-studio.com/wp-json/acf/v3/pages";

const residencesUrl = `${BASE_URL}/119`;
const visionUrl = `${BASE_URL}/112`;
const homeUrl = `${BASE_URL}/6`;
const menuUrl = `https://verdalastage.bison-studio.com/wp-json/acf/v3/options/option/add_menu`;
const getApi = async (url) => {
  const res = await axios({
    method: "get",
    url: url,
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

const allResidences = () => getApi(residencesUrl);
const allVision = () => getApi(visionUrl);
const allHome = () => getApi(homeUrl);
const allMenu = () => getApi(menuUrl);
export { allResidences, allVision, allHome, allMenu };
