Leopardon Data Analysis Problem

It's April 24, 2133. Your job is to save the world. Well, a little world. Specifically the asteroid MIR-Z-32 that you and Leopardon are stuck on. You've been stranded there ever since the evil Rejectos hit your spaceship with a torpedo fired from one of their spaceships. Now you and Leopardon are trying to save your little world from a concerted Rejectos attack.

The main problem you have is detecting the Rejectos spaceships and torpedoes, because they're protected with cloaking devices. You have invented an imaging anti-neutrino robot (which you modestly named the “Leopardon”) that provides the only information you have about their location, but it's not very good information. First, the Leopardon only detects whether there are anti-neutrinos at any particular point on an image, not what their intensity is. In other words, the data it provides is the equivalent of a black-and-white image. Second, the data is very noisy – even if there are no targets in a particular area, some pixels will be “on”, and if there is a target, some of its pixels will be “off”.

data.blf: a 100 x 100 swath of raw Leopardon data containing between four and ten targets.
torpedo.blf: a perfect image of a torpedo.
spaceship.blf: a perfect image of a Rejectos spaceship.

Task is to analyze arbitrary-sized Leopardon images, returning a list of targets found. Each target found should include the target type found (spaceship or torpedo), the coordinates of the target on the Leopardon data, and some indication of your confidence in the target detection.
