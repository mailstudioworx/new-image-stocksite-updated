// Static generation configuration and helpers

export const REVALIDATE_TIME = {
  GALLERY: 3600,          // 1 hour
  BLOG: 3600,             // 1 hour
  CATEGORY: 86400,        // 24 hours
  HOME: 86400,            // 24 hours
  RARE: 604800            // 7 days
};

export async function getStaticPathsWithFallback(paths) {
  return {
    paths,
    fallback: 'blocking'
  };
}

export async function getStaticPropsWithRevalidate(props, revalidate) {
  return {
    props,
    revalidate
  };
}

export function getAllStaticPaths(items, paramKey) {
  return items.map(item => ({
    params: {
      [paramKey]: item.slug
    }
  }));
}

export async function generateMetaData(title, description, image, url) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      image,
      type: 'website'
    },
    twitter: {
      title,
      description,
      image
    }
  };
}
