import "./app.css";
import SearchBar from "@/components/search/SearchBar";

export default function Home() {
  return (
    <main>
      <div className="search-container">
          <SearchBar />
      </div>
    </main>
  );
}
