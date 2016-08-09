from distutils.core import setup
 
import py2exe
 
setup(console=[{'script':'bootstrap.py'}],
         options={'py2exe':{'packages':['django','email',]}})
