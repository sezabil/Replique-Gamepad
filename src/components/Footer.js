import AppPagination from "./AppPagination";

const Footer = ({ page, setPage }) => {
  return (
    <footer>
      <AppPagination setPage={setPage} page={page} />
    </footer>
  );
};
export default Footer;
