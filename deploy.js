// deploy.js
import ghpages from 'gh-pages';

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/sibaramsamal/bhakthipath-a-divine-journey.git',
  user: {
    name: 'Sibaram Samal',
    email: 'your-email@example.com' // Use your Git config email
  },
}, function(err) {
  if (err) {
    console.error('Deployment error:', err);
  } else {
    console.log('Deployed to GitHub Pages!');
  }
});
