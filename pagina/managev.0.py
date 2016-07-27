#!/usr/bin/env python
import os
import sys
import threading
from queue import Queue

def server():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "pagina.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)

def tunnel():
    os.system('ngrok.exe http 8000')

def threader():
    while True:
        worker = q.get()

        if worker == 0:
            server()
        else:
            tunnel()

        q.task_done()
        

if __name__ == "__main__":
    print_lock = threading.Lock()
    
    q = Queue()

    for x in range(2):
        t = threading.Thread(target=threader)

        t.daemon = True

        t.start()

    q.put(0)
    q.put(1)

    q.join()
