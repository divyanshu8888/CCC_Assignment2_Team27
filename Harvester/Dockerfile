FROM python
WORKDIR /usr/app
COPY . .
RUN pip install Mastodon.py-1.8.1-py2.py3-none-any.whl
CMD ["python", "harvester.py"]