#!/bin/bash
# 9/19/2018 ver 0.0.0 support for SARndbox-2.5, Kinect-3.6, Vrui-4.5-004
# includes udev usb encoder button support & weather script support
# wget https://raw.githubusercontent.com/sfranzyshen/ifl/master/Scooby-2.5.sh
# bash Scooby-2.5.sh

cd ~
wget http://idav.ucdavis.edu/~okreylos/ResDev/Vrui/Build-Ubuntu.sh
bash Build-Ubuntu.sh

cd ~/src
wget http://idav.ucdavis.edu/~okreylos/ResDev/Kinect/Kinect-3.6.tar.gz
tar xfz Kinect-3.6.tar.gz
cd Kinect-3.6
make
sudo make install
sudo make installudevrules
ls /usr/local/bin

cd ~/src
wget http://idav.ucdavis.edu/~okreylos/ResDev/SARndbox/SARndbox-2.5.tar.gz
tar xfz SARndbox-2.5.tar.gz
cd SARndbox-2.5
make
ls ./bin

read -p "Plug in your 3D Camera and Press enter to continue"
sudo /usr/local/bin/KinectUtil getCalib 0

cd ~
wget https://github.com/sfranzyshen/ifl/raw/master/SARndbox-2.5_IFL-addons.tar.gz
tar xfz SARndbox-2.5_IFL-addons.tar.gz
bash fixup-sandbox.sh



