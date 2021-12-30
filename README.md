# Cloud-Resume-Project
Challenge to make a static website using HTML/CSS/Javascript - I used a template off of codepen.io and changed several sections and altered to my    liking.
  
Upload front-end code to an S3 bucket and apply proper policies - purchased domain on Route53 and route S3 link to domain. To secure the site, got a cert in AWS ACM and deploy CloudFront and route it back to Route53 so it can be reaccessed through my domain. Implement CloudFront Origin Access Identity which allows S3 content to be visible only by CloudFront (S3 content accessed only from CloudFront)

BackEnd: 

AWS Code Pipeline: Instead of manually uploading latest changes to my S3 bucket, using AWS Code Commit would still require manual runs from repo to push to S3 bucket; I decided to use AWS Pipeline and connected to my GitHub repository (Rather than code commit) - AWS Code Pipeline would be triggered and push all updates from my repository on Github to my S3 bucket.
