import { UseInfiniteScroll } from "../../../lib/hooks";

type LoaderProps<T> = Pick<
  UseInfiniteScroll<T>,
  "isLoading" | "loadMoreCallback" | "isLastPage"
>;

export const Loader_v1: <T>(
  props: LoaderProps<T>
) => JSX.Element = props => {
  if (props.isLoading) return <p>Loading...</p>;

  if (props.isLastPage) return <p>End of content</p>;

  return (
    <div ref={props.loadMoreCallback}>
      load more callback
    </div>
  );
};
