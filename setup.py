from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in hkmvizag/__init__.py
from hkmvizag import __version__ as version

setup(
	name="hkmvizag",
	version=version,
	description="NAVBAR",
	author="Rajat Singh",
	author_email="rajat.singh@bizmap.in",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
