#!/bin/sh
USER=jon
HOST=do-blog
DIR=/var/www/jborichevskiy.com/html/

hugo && rsync -avz --delete public/ ${USER}@${HOST}:${DIR}

exit 0