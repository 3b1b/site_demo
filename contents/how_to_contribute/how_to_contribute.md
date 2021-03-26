# How to Contribute

This blog series is lead by Grant Sanderson, but curated entirely by the community.
If there is an error in any of the blog posts or you feel the post does not capture the essense of a video topic, please feel free to create an issue on github and we will be more than willing to discuss it.

To start, the blog has been populated with a series of stub articles, each containing the video that will eventually be transformed into text.
If you would like to help in this process, we have created a master overview for all of the videos that still need bloggification and the steps left before the content is complete and ready to be put up on the site.

## Git and Version Control

For those who might not be familiar with git and version control, please send any questions you might have to [James Schloss](jrs.schloss@gmail.com).
In addition, you might want to check out the following resources:

1. Discord
2. Git resources

We strongly encourage contributors to create a local fork and branch to work from that can easily become a Pull Request onto the `master` branch of the blog.
Befor merging, all content will undergo a rigorous review process by Grant, James, or other members of the community.

If you would like to speed up the process for everyone, please consider helping out with reviews!

## Building with Honkit

Honkit is used for the purposes of the 3Blue1Brown Blog.
To install, use:

```
npm install honkit
npm install
```

To run the site locally, use

```
npx honkit serve
```

or

```
npm run serve
```

After everything is built, you should be able to look at the site at [http://localhost:4000](http://localhost:4000) (or something similar).

## Licensing

All content for the 3Blue1Brown Blog is under Creative Commons...

The key exception here is for the Pi Creatures, which are trademarked by Grant Sanderson under ...

## Formatting and content generation

For the content of this blog, we are trying our best to keep the content as close to the video source as possible; however, there will inevitably be small variations.
Each post will be composed of:

1. The video source at the top of the page
2. The contents of the video in text form with short video clips scattered throughout.
3. Licensing notices at the bottom

In general, please use the following guidelines when creating content for the 3Blue1Brown Blog:

1. Try to keep the text as close as possible to the video source
2. When creating video clips, cut out the audio and try to keep the video as short as possible, while still showing the key visualizations
3. Be sure to place your name in the licensing at the bottom of the page and in grey text under the main title
4. Make sure all images and graphics have appropriate licensing at the bottom of the page

In general, the workflow for creating blog content should be the following:

1. Find a video that you would like to transcribe and find the video in the M<aster Overview.
If the video is already being worked on, please contact the person working on it or choose another video to transcribe.
2. Once a video has been chosen, update the Master Overview to let others know you are working on the video and then create a fork of the blog and also a branch within that fork for the blog content
3. Create a script for the video and create any necessary graphics
4. Create a Pull Request for the video and wait for review

If you need any specific examples, please look at the finished chapters in the Master Overview, such as:

1. Fourier transforms (ADD LINK)
2. Whatever else we do

## How to use the master overview

The master overview is a list of all videos on the 3blue1brown channel.
All of the videos that need transcription can be found here in various levels of completion.

## How to create a script

The easiest way to write the script is to watch the video and simultaneously write what you hear into a markdown file.
After this process, simply go through the file and check for typos or any phrases that do not seem to make sense when written down.
Finally, check the spelling of the file (if necessary, use a tool like `aspell -c file.md`).

## How to create graphics

Most of the graphics for the 3Blue1Brown Blog should be direct clips from the source video; however, in the case where a specific visual is needed, still images are also acceptable.
For edited images, please add your name along with Grant's to the licensing at the bottom of the page.

In general, the workflow for creating graphics should be the following:

1. Watch the video and identify key visualizations that are necessary to understand the topic
2. Pull the video from youtube (using a tool like `youtube-dl`)
3. Open the video in a video editor (such as Premiere, Microsoft Movie Maker, Kdenlive, or Blender) and remove the sound from the video.
4. Cut specific clips of the video that are relevant
5. Embed those clips into the markdown file with:
```
Add HTML here
```
6. Update the master overview to show others that key graphics have been generated
