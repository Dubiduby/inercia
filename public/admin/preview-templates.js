// Custom preview template for Gallery collection
const GalleryPreview = createClass({
  render() {
    const { entry, getAsset } = this.props;
    const imageField = entry.getIn(['data', 'image']);
    const alt = entry.getIn(['data', 'alt']) || 'Sin alt text';
    const caption = entry.getIn(['data', 'caption']);
    const order = entry.getIn(['data', 'order']) || 1;

    // Get the image URL
    let imageUrl = null;
    if (imageField) {
      try {
        const asset = getAsset(imageField);
        imageUrl = asset ? asset.toString() : null;
      } catch (e) {
        console.error('Error getting asset:', e);
      }
    }

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '20px',
      background: 'white'
    };

    const imageContainerStyle = {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    const imageStyle = {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    };

    const contentStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    };

    const titleStyle = {
      fontWeight: 600,
      fontSize: '18px',
      color: '#333'
    };

    const captionStyle = {
      fontSize: '15px',
      color: '#666',
      lineHeight: '1.5'
    };

    const metaStyle = {
      fontSize: '13px',
      color: '#999'
    };

    return h('div', { style: containerStyle },
      imageUrl && h('div', { style: imageContainerStyle },
        h('img', {
          src: imageUrl,
          alt: alt,
          style: imageStyle
        })
      ),
      h('div', { style: contentStyle },
        h('div', { style: titleStyle }, alt),
        caption && h('div', { style: captionStyle }, caption),
        h('div', { style: metaStyle },
          `Display Order: ${order}${imageUrl ? ' • ' + imageUrl.split('/').pop() : ''}`
        )
      )
    );
  }
});

// Register the preview template
CMS.registerPreviewTemplate('gallery', GalleryPreview);
