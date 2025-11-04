import NewsListItem from "@/components/frontend/news/NewsListItem";
import { Typography } from "@/components/ui/typography";

const AllNewsPage = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
      <div className="lg:col-span-1">
        <div className="sticky top-8">
          <Typography variant="h2" className="mb-6">
            News
          </Typography>
          <div className="space-y-4">
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllNewsPage;
