import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface SerchBarProps {
  onSubmit: (value: string) => void;
}

function SerchBar({ onSubmit }: SerchBarProps) {
  const handlerSubmit = (formData: FormData) => {
    const query = formData.get("query" as string).trim();
    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }
    onSubmit(query);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form} action={handlerSubmit}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default SerchBar;
