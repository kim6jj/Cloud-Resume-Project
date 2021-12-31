# Cloud-Resume-Project
Challenge to make a static website using HTML/CSS/Javascript with certain guidelines.
  
FrontEnd: created an HTML static website using a template from codepen.io, purchased/registered a domain on Route53 (Created hosted zone w/ SOA NS Records). Next, created an S3 bucket (publicly readable enabling public access and bucket policy - originally had turned on static website hosting but later had to turn it off)

I uploaded static web page files all on the root (index, css, etc). I then created a Cloudfront Distro with the S3 bucket I created as the origin (created 1 with alternate CNAME for www and the actual domain). I created SSL certs for my domain to attach to my CDN to enable TLS and redirect HTTP to HTTPS. After, I created A records to in Route 53 to point www.jjkim.net and jjkim.net to the CloudFront Distribution.

BackEnd: 

AWS Code Pipeline: Instead of manually uploading latest changes to my S3 bucket, using AWS Code Commit would still require manual runs from repo to push to S3 bucket; I decided to use AWS Pipeline and connected to my GitHub repository (Rather than code commit) - AWS Code Pipeline would be triggered and push all updates from my repository on Github to my S3 bucket.
