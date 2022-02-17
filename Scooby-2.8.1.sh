#!/bin/bash
# 2/17/2022 ver 1.0.0 support for SARndbox-2.8, Kinect-3.10, Vrui-8.0
# includes weather script support
# wget https://raw.githubusercontent.com/sfranzyshen/ifl/master/Scooby-2.8.1.sh
# bash Scooby-2.8.1.sh

cd ~
wget http://web.cs.ucdavis.edu/~okreylos/ResDev/Vrui/Build-Ubuntu.sh
bash Build-Ubuntu.sh

cd ~/src
wget http://web.cs.ucdavis.edu/~okreylos/ResDev/Kinect/Kinect-3.10.tar.gz
tar xfz Kinect-3.10.tar.gz
cd Kinect-3.10
make
sudo make install
sudo make installudevrules
ls /usr/local/bin

cd ~/src
wget http://web.cs.ucdavis.edu/~okreylos/ResDev/SARndbox/SARndbox-2.8.tar.gz
tar xfz SARndbox-2.8.tar.gz
cd SARndbox-2.8
make
ls ./bin

read -p "Plug in your 3D Camera and Press enter to continue"
sudo /usr/local/bin/KinectUtil getCalib 0

cd ~
wget https://github.com/sfranzyshen/ifl/raw/master/SARndbox-2.8.1_IFL-addons.tar.gz
tar xfz SARndbox-2.8.1_IFL-addons.tar.gz

mkfifo ~/src/SARndbox-2.8/share/SARndbox-2.8/Control.fifo

