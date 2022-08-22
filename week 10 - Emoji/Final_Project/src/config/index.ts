import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const title = 'Issac Nolberto Pacheco Ek';

const email = 'issacnolbertopachecoek@hotmail.com';

const repository = 'https://github.com/';

const messages = {
  app: {
    crash: {
      title: 'Sorry, I guess, something went wrong. You can:',
      options: {
        email: `contact with me with this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'There is something wrong with this component loading process...',
  },
  images: {
    failed: 'Something went wrong during image loading',
  },
  404: 'What are you looking for?',
};

const dateFormat = 'MMMM DD, YYYY';

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  delay: 300, 
  minimumLoading: 700, 
};

const defaultMetaTags = {
  image: '/main-page-issac.png',
  description: 'This project my modern web application',
};

export {
  loader,
  notifications,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
};
