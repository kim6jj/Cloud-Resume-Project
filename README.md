# Cloud-Resume-Project
Challenge to make a static website using HTML/CSS/Javascript - I used a template off of codepen.io and changed several sections and altered to my liking.
Upload front-end code to an S3 bucket and apply proper policies - purchased domain on Route53 and route S3 link to domain. To secure the site, got a cert in AWS ACM and deploy CloudFront and route it back to Route53 so it can be reaccessed through my domain. Implement CloudFront Origin Access Identity which allows S3 content to be visible only by CloudFront (S3 content accessed only from CloudFront)
BackEnd: 
Source Control with AWS Code Pipeline: 
