import './index.scss';

interface CoverCardProps {
  image: string;
  cutImage: string;
  text: string;
}

const CoverCard = ({
  image,
  text,
  cutImage
}: CoverCardProps) => {
  return (
    <div className="coverCard" style={{
      backgroundImage: `url(${image})`,
    }}>
      <h2 className="coverCard__title">
        <span
          className="coverCard__title_transparent"
          style={{
            backgroundImage: `url(${image/* cutImage */})`,
          }}
          dangerouslySetInnerHTML={{__html: text}}
        />
      </h2>
    </div>
  )
};

export default CoverCard;