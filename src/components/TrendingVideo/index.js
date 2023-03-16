import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  TrendingList,
  TrendingImage,
  TrendingContainer,
  TrendingImageCon,
  ChannelImage,
  ChannelDetailsCon,
  ChannelTitle,
  ChannelName,
  ChannelViews,
  ChannelViewCon,
  ChannelSpan,
  ChannelSpan2,
  DotContainer,
} from './styledComponent'

const TrendingVideo = props => {
  const {trendingVideo} = props
  const {
    id,
    publishedAt,
    title,
    thumbnailUrl,
    viewCount,
    channel,
  } = trendingVideo
  const {name, profileImageUrl} = channel
  const published = formatDistanceToNow(new Date(publishedAt))
  return (
    <TrendingList>
      <Link to={`/videos/${id}`}>
        <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
      </Link>
      <TrendingContainer>
        <TrendingImageCon>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
        </TrendingImageCon>
        <ChannelDetailsCon>
          <ChannelTitle>{title}</ChannelTitle>
          <ChannelViewCon>
            <ChannelName>{name}</ChannelName>
            <DotContainer>
              <ChannelSpan>.</ChannelSpan>
              <ChannelViews>{viewCount}</ChannelViews>
              <ChannelSpan2>.</ChannelSpan2>
              <ChannelViews>{published}</ChannelViews>
            </DotContainer>
          </ChannelViewCon>
        </ChannelDetailsCon>
      </TrendingContainer>
    </TrendingList>
  )
}
export default TrendingVideo