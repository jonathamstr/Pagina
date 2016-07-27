#!/usr/bin/env python
import os
import sys
import threading
from queue import Queue

print_lock = threading.Lock()

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "pagina.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
    
