# Use the official Nginx image
FROM nginx:latest

# Copy all website files into the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80