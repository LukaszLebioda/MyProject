# Use a lightweight Nginx image
FROM nginx:alpine

# Copy all files into the nginx web directory
COPY . /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80
