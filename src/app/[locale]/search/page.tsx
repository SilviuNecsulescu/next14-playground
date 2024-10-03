import { SearchByName } from "@/utils/types";

export default function SearchPage({
  searchParams,
}: {
  searchParams: SearchByName;
}) {
  return (
    <h1>
      Hi {searchParams.name}. This is a SSR page and it depends on searchParams.
    </h1>
  );
}
