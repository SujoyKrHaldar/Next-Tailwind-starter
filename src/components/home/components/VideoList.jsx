import Card_video_box from "../../designs/cards/Card_video_box";

function VideoList({ data }) {
  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        {data.slice(0, 4).map((data, index) => (
          <Card_video_box data={data} key={index} />
        ))}
      </div>
    </>
  );
}

export default VideoList;
