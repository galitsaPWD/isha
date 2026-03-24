// --------
// Poem data
// --------

const poems = [
  {
    id: "i-still-remember-that-night",
    title: "that night",
    meta: "confession | longing",
    firstLine:
      "i still remember that night that even in the darkness i still see ur smile so bright",
    body: `i still remember that night —
that even in the darkness,
i still see ur smile so bright.
i don't know if this is right,
but i know that when im with u it feels so damn right.

im the type of guy that doesn't care about what other people think
but when im with u, i even count my eyes blink.
damn, ur just the girl i've always wanted
but i don't know if i still have it.

i want to love u unconditionally
but i still think of the probability.
that u're too scared to try,
that u have been scarred by life.

i get it, cause i've been there
but all that feeling vanished,
cause im always mesmerized
by ur smile, ur eyes, and ur laugh.
and hoping one day im the reason u do that
and when im with u i just wanna risk it all,
even when i fly or i fall.

i can't help myself when im beside u,
all my baggage just vanished when im talking to u.
u lessen my burdens in ways u won't understand,
i feel warm, fuzzy, and happy when i touch ur hand.
words are nothing, it can't really tell u how i feel,
but i can assure u my feelings are real.

im writing this tonight cause i miss u,
and i think im going insane.
i never felt this way before, but with u
"goddamn" that's all i can say.`,
  },
  {
    id: "dark-moon",
    title: "constellations of you",
    meta: "night | tenderness",
    firstLine: "oh, how dark is the moon compared to your light;",
    body: `oh, how dark is the moon
compared to your light;
even the stars fall quiet
beside your beauty so bright.

sailors lose their bearings
reading constellations at night,
for every map in the heavens
still leads back to your light.

i always loved the night
but now i love it more being with you tonight;
every words you speak
feels like space —
a vast world where only
my heart finds it's place.

and somehow, in all that quiet light,
i found you — and i found myself
never thought it'd come to this,
but thank God that it is.`,
  },
  {
    id: "love-is-you-1",
    title: "love is u",
    meta: "love | softness",
    firstLine: "people say love comes in different forms, but i say love is u —",
    body: `people say love comes in different forms,
but i say love is u —
in the way you laugh even when you’re hurting,
in the way you look at me like you're trying not to fall,
in the way you trust me with things you hide from the world.

if love really has a thousand shapes,
then mine always seems to fit your silhouette.`,
  },
  {
    id: "if-loving-you-was-a-mistake",
    title: "the mistake i'd make again",
    meta: "love | almost",
    firstLine: "if loving you was a mistake, then why’s it the only thing i ever got right?",
    body: `if loving you was a mistake,
then why’s it the only thing i ever got right?

maybe it’s the way you look at me when you think i’m not noticing,
or how your voice softens whenever you say my name —
like you’re trying not to let the truth slip out.

i’ve loved people before, but never like this.
never with this mix of fear and certainty,
never with this quiet hope that maybe,
if the world was kinder,
you’d choose me without thinking twice.

i don’t ask for forever.
i don’t even ask for now.
i just want you to know that love —
the kind i feel for you—
doesn’t happen by accident.
it happens because something in you
felt like home,
the moment i got close enough to see you clearly.

and maybe one day,
when your heart stops trembling,
you’ll understand why i stayed.
not because it was easy —
but because even my mistakes
never felt as right
as you.`,
  },
  {
    id: "cant-get-over-you",
    title: "a question",
    meta: "crush | memory",
    firstLine: "your face still lingers, even when i close my eyes at night.",
    body: `your face still lingers,
even when i close my eyes at night.
i reminisce all the small things that you do,
in broad daylight.

i can't get over you,
no matter what i try to do.
you're stuck in my head,
and i'm stuck with you too.

maybe it's because i like you,
or you're someone i want to be with.
i don't need answers now,
but you're a question — 
i love to think about.`,
  },
  {
    id: "simple-touch",
    title: "coming home",
    meta: "hands | home",
    firstLine: "i didn't know a simple touch could feel like a confession.",
    body: `i didn't know a simple touch could feel like a confession.
your hand in mine —
mine in yours.

your hand is small —
but it fits in a way that shouldn’t make sense.
i can feel your trust,
in the quiet of that moment.

it's quiet, warm, and steady —
like the universe finally answering a question
i didn’t even know i was asking.
funny how something so small,
can make you want to rewrite your whole life around a person.

maybe holding your hand isn’t a big deal to the world,
but to me?
it feels like coming home.`,
  },
  {
    id: "dinosaurs-and-you",
    title: "dinosaurs & you",
    meta: "healing | survival",
    firstLine: "i’ve always loved dinosaurs — ancient giants that lived loud",
    body: `i’ve always loved dinosaurs —
ancient giants that lived loud
and died louder.
creatures that felt too big for their world,
just like the feelings i try to hide.

but then you came along,
quiet and soft,
and somehow you felt like the missing fossil
my heart had been digging for.

you’re not a meteor —
you’re the sunlight that made the ferns grow back.
the warm earth after the storm.
the proof that even after extinctions,
something beautiful can still rise.

maybe that’s why i like you so much:
you make me believe in survival.
in second chances.
in love that doesn’t crush,
but rebuilds.`,
  },
  {
    id: "love-today",
    title: "breathing easier",
    meta: "modern love | softness",
    firstLine: "love today feels complicated — the situationships,",
    body: `love today feels complicated —
the situationships,
the love bombing,
the cold replies,
and everything in between.

but beneath all that noise,
love is still simple.
it starts with safety —
with someone who stays
even when you can’t stay with yourself.

love lives in the small things:
the way you fix your hair without thinking,
the way you laugh too hard at my dumb jokes,
the way we learn each other’s habits
like muscle memory.

maybe we’ve been chasing the wrong picture —
thinking love should always be fireworks
when sometimes it’s just the quiet truth
that being with you
feels like breathing easier.

we fell so deep into the 
social media's definition of love —
that we forgot what love really asks for.
not perfection.
not constant happiness.
just trust,
a little softness,
and that kind of safety
that only shows up
when someone finally feels like home.`,
  },
  {
    id: "i-admired-her",
    title: "admiring her, always",
    meta: "admiration | real love",
    firstLine: "i admired her long before i understood why.",
    body: `i admired her long before i understood why.
not because she was perfect —
but because she wasn’t.

she was soft in the places
the world had tried to harden,
gentle in the moments
life taught her to be tough.

she was just a person —
messy, flawed, beautifully human —
and somehow that made her feel like home.

there was something sacred
in the way she lived quietly,
never asking to be adored,
never trying to be extraordinary,
just existing with a kind of honesty
that made the world around her soften too.

she didn’t know it,
but she was a place i want to return to.
a breath after the storm,
a calm in the middle of all my noise.
a solace —
the kind that doesn’t demand anything
yet gives everything
just by being there.

and maybe that’s the truth about real love:
it isn’t fireworks,
or destiny,
or perfection.

it’s seeing someone exactly as they are,
and choosing to stay —
not because they shine,
but because their light feels familiar.

i admire her in every way —
in the ways she knows,
and in the ways she doesn’t.`,
  },
  {
    id: "her-eyes",
    title: "when the world goes quiet",
    meta: "eyes | gravity",
    firstLine:
      "her eyes were the first thing that ever made the world go quiet —",
    body: `her eyes were the first thing
that ever made the world go quiet —
soft and steady,
beautiful in that effortless way
she never tries to be.

i didn’t understand it at first,
but now it feels impossible to miss.
there’s a pull in them,
a gentle gravity
that makes me forget everything else
except the way she’s looking back.

they’re deeper than the ocean’s calm,
warm enough to steady my heartbeat,
and somehow they say
“you’re safe here”
without ever saying a word.

there’s a kind of romance in their silence —
no fireworks,
no noise,
just the quiet certainty
that i could look at them once,
look again,
and never want to turn away.

i think that’s why they stay with me.
because her eyes aren’t just something to admire —
they’re something to return to.

and even years from now,
when time has softened everything else,
i know i’ll remember them
as clearly as the first time
they found me.`,
  },
  {
    id: "blue-skies-bedrock",
    title: "daydreams of us",
    meta: "daydream | future",
    firstLine: "blue skies and bedrock, truth and bullocks.",
    body: `blue skies and bedrock,
truth and bullocks.
random nights feels empty,
when you're not around me.

city lights and night sky,
it's feel so good 
when you kissed me goodbye.
random thoughts in my head,
all vanished when you kiss me instead.

puddles and bubbles,
i hope our home is
full of love and laughter,
with our son or daughter.

i know this is all in my head,
but i hope one day it'll be the end.`,
  },
  {
    id: "i-love-long-quiet-nights",
    title: "icarus",
    meta: "longing | admiration",
    firstLine: "i love long quiet nights, but i wish you could tell me goodnight.",
    body: `i love long quiet nights,  
but i wish you could tell me goodnight.  

your small words and actions  
speak loudly in my mind.

every movement of your soul  
brings light to my desolate life.  
your eyes speak truths  
even the deaf could understand.

i admire you in everything you do—  
dancing, combing your hair,  
sitting quietly,  
or simply being beside me.

i realized i didn't like you  
in the ways the others did.  
i never cared about who you were
or what the world thought of you.

what i liked was your soul—  
warm like the sun,  
and i'm icarus, falling happily.

it burns,  
but i'd gladly bear the fire  
if it meant i could stay  
in your gentle light.`,
  },
  {
    id: "tell-me-your-flaws",
    title: "learning you",
    meta: "acceptance | love",
    firstLine: "tell me your flaws— not the cute ones you joke about,",
    body: `tell me your flaws—
not the cute ones you joke about,
but the ones you think would make someone look away,
the ones you hide because you've always had to be strong.

tell me the worries that sit heavy on your chest,
the mistakes you replay when the world goes quiet,
the things people misunderstood
that made you fold yourself smaller than you really are.

show me the cracks beneath your laughter,   
the tremble in your hands
when life gets loud,
the way you turn your face
when you're fighting tears you won't let fall.

i don't want the perfect version of you—
i want the honest one,
the one who feels deeply,
who gives too much,
who loves quietly but fiercely.

the girl who overthinks,
who hides her pain behind a smile,
who forgets her worth
because she's too busy carrying everyone else.

none of that scares me.
none of that pushes me away.

every flaw you fear
is just another place where your light slips through,
another part of you I want to understand,
slowly, patiently, gently.

you're not "too much,"
you're not "hard to handle,"
you're not "difficult to love."

you're human—
raw, brilliant, soft at the center
even when you pretend you're made of stone.

and if you ever choose to trust me
with the pieces you hide,
i'll hold them steady,
not to fix you,
but to learn you.

so tell me your flaws.
not all at once—
just one at a time.
i'll meet you where you are,
every single time.`,
  },
  {
    id: "ive-walked-through-gardens",
    title: "a single tulip",
    meta: "devotion | choice",
    firstLine: "i've walked through gardens so loud with color they almost felt alive,",
    body: `i've walked through gardens
so loud with color they almost felt alive,
rows and rows of perfect blossoms
reaching for anyone who bothered to look.

but beauty gets lonely
when it isn't the one you're searching for.
and somewhere along the way,
i realized i wasn't looking for a garden at all—

just a single tulip,
quiet and sure in its own softness.

strange thing, really —
how one flower can change the meaning
of an entire field.

because every time i pass by a bloom now,
my heart does this little turn,
hoping—
just hoping—
for the shape of you.

and even if the world handed me
an endless meadow of petals,
all bright, all flawless,
it wouldn't matter.

what use is a whole garden
if the one flower i'd choose
is nowhere in it?`,
  },
  {
    id: "teach-me-your-favorites",
    title: "teach me your favorite things",
    meta: "knowing you | tenderness",
    firstLine:
      "teach me your favorite things — the way you love coca-cola and matcha,",
    body: `teach me your favorite things —
the way you love coca-cola and matcha,
how your whole brain shakes when you have to choose,
how you can finish a pack of gummy sweets
without even thinking.

tell me about your dream cities —
New York, Tokyo —
places loud enough
to hold a quiet heart like yours.
or just a quiet country — 
like Switzerland.

i don’t just like you.
i want to know you.

tell me about wrestling,
your hobbies,
the things you love but never talk about
because you think they’re stupid or small.

i want to know your soul,
not just the shell you show the world.

teach me your favorite things —
your love for tulips,
your colors of black, white, and beige,
your soft spot for cinderella,
your obsession with buttered shrimp, fries,
and yes — even balut.

but most of all,
teach me you.

the parts you hide,
the pieces you think no one will understand,
the version of you that feels too fragile to show.

i will understand.
i want to learn you —
the good, the messy, the soft, the difficult.

because loving someone
means loving the flaws too —
the ones they try to tuck away.

and i love you as you are.
all of you.`,
  },
  {
    id: "let-me-love-you-there",
    title: "love you in the quiet places",
    meta: "acceptance | devotion",
    firstLine: "let me love you in the places you don’t show anyone.",
    body: `let me love you in the places you don’t show anyone.

the flaws you hide when the world feels too sharp,
the worries you swallow because you think
no one could ever understand them.

come closer —
tell me the things you think make you unlovable,
the habits you’re scared will push someone away,
the fears that sit quietly in the corners of your heart.
i won’t look at you differently.
i’ll love you deeper for them.

i want to know the way your voice softens
when you admit you’re tired,
how your hands shake a little
when you feel overwhelmed,
how you pretend you’re fine
when your eyes are begging someone to notice you’re not.

let me see the parts of you
you’ve learned to hide —
not to fix them,
but to hold them
like something precious.

because every flaw you fear
is a place i want to rest my hands,
every crack you hide
is a doorway into something real and beautiful and you.

i don’t want the polished version,
the practiced smiles,
the brave face you show the world.
i want the girl who loves too much,
who feels too deeply,
who thinks she’s “hard to understand”
when she’s actually the easiest person in the world to love.

so tell me your flaws —
slowly, softly, one by one.
i’ll meet you where you are,
i’ll stay as long as you let me,
and i’ll love you not despite those pieces
but because they’re yours.

and if there’s anything you can’t say yet,
that’s okay.
i’ll wait.
loving you was never something
i wanted to rush —
it's something i wanted to grow into
gently, completely,
in every corner of who you are.`,
  },
  {
    id: "burnt-cigarette",
    title: "burnt cigarette",
    meta: "devotion | intensity",
    firstLine: "i know what i'm holding between my fingers might be the end of me —",
    body: `i know what i'm holding between my fingers
might be the end of me —
but some endings are worth the smoke.

you remind me of a cigarette:
soft at first,
then heavy,
then impossible to let go of
even when it begins to hurt.

if you let me,
i'd learn how your wounds breathe —
not to fix them,
but to understand the language of your ache.
every scar, every silence,
i'd memorize like scripture.

show me the parts you hide —
the ones you think are too sharp to touch.
i'll take them in my hands,
bleeding if i have to,
just to prove your edges
are worth knowing.

they call it foolish
to love something that can kill you.
but if your love is poison,
i'll sip slow,
let it move through my veins
until I'm nothing but the warmth you left behind.

i never wanted perfection —
i wanted you.
raw. 
trembling.

a human who breaks
and still dares to try again.

so if this burns me down,
then let it.
some fires
are worth dying in.`,
  },
  {
    id: "in-the-most-selfish-way",
    title: "in the most selfish way possible",
    meta: "longing | possessiveness",
    firstLine: "i know i don't own you, and i know i have no right",
    body: `i know i don't own you,
and i know i have no right
to feel this twist in my chest
every time someone else
makes you smile.

but God,
in the most selfish way possible,
i hope no one sees you
the way i do —
the way you glow
when you're trying not to laugh,
the way your eyes soften
when you're comfortable,
the way you rest your hand
on your cheek when you're shy.

i hope no one notices
how gentle your voice gets
when you talk about the things you love,
or how your whole face brightens
when you finally feel understood.

because the truth is,
i don't want to share that version of you.
the quiet one,
the real one,
the one you only show
when you feel safe.

i know it's selfish —
i'm painfully aware.
but i hope,
just for once,
the world looks away
so i can admire you
in peace.

not because you owe me anything,
but because loving you,
even from a distance,
feels like the only thing
i ever wanted to do right.

so in the most selfish way possible —
i hope no one admires you
the way i do.`,
  },
  {
    id: "find-me",
    title: "find me",
    meta: "support | safety",
    firstLine: "find me when the world gets too loud —",
    body: `find me when the world gets too loud —
when your family cuts too deep,
when your friends forget how to stay,
when you feel yourself slipping
under the weight of things you never say out loud.

find me when your chest feels tight
for reasons you can't explain,
when you're tired of pretending you're fine,
tired of being the strong one,
tired of holding yourself together
while no one notices you're breaking.

you don't have to be okay for me.
you don't have to smile.
you don't have to talk.
just find me.

i won't promise to fix the world for you —
but i promise you won't face it alone.
i'll sit with you in the dark,
i'll hold the silence with you,
and when you forget your own light,

i'll remind you where it still burns.

you're never a burden.
not to me.
not ever.

so when everything feels too heavy,
come find me.
i'll stay.`,
  },
  {
    id: "a-melody",
    title: "a melody",
    meta: "beauty | music",
    firstLine: "i used to think music was the closest thing i'd ever get to magic —",
    body: `i used to think music was the closest thing
i'd ever get to magic —
the way it fills a room,
the way it settles into you
like it knows every quiet part of your heart.

but then you smiled.

and suddenly, every love song
finally made sense.

your smile feels like the warmest chorus,
the softest bridge,
the one part of the song
i never want to end.

it's the kind of beauty
that doesn't just catch your attention —
it pulls you in,
holds you still,
and makes the whole world sound different.

i used to think music was my favorite thing.
but the truth is,
nothing has ever moved me
the way your smile does —
slow, gentle,
and impossibly romantic.

and if i could play anything,
it would always —
always be you.

you're the only melody
i never get tired of.`,
  },
  {
    id: "i-felt-more-with-you",
    title: "more with you",
    meta: "love | depth",
    firstLine: "i felt more with you in the few weeks we talked",
    body: `i felt more with you
in the few weeks we talked
than i did in three years
with someone who once held my heart.

there’s something about you —
the way you laugh,
the way your mouth blabber
when you talk about the things you love,
the way you make even silence
feel like a place i want to stay.

with you, everything feels warmer.
lighter.
realer.

you walked into my life quietly,
like it was nothing,
but somehow you lit up spaces in me
i didn’t even realize had gone dim.

and it’s crazy —
how a few moments with you
outweighed years
of what i thought was love.

how your presence,
your softness,
your soul
made me feel things
i didn’t even feel in years of loving someone else.

you made me realize something:
it’s not about how long you’ve known a person —
it’s about how deeply they touch you
in the moments they’re there.

and you 
in such a short time,
you’ve moved me
in ways i didn’t think were possible anymore.

you made me feel more,
love more,
hope more.

and God —
i wouldn’t trade that for anything.`,
  },
  {
    id: "ive-always-hated-my-smile",
    title: "when i forget to hide",
    meta: "self image | tenderness",
    firstLine: "i’ve always hated my smile —",
    body: `i’ve always hated my smile —
the crooked teeth,
the awkward tilt,
the way i try not to show too much
because i’m scared someone will notice
what i notice every day.

but with you —
i forget to hide.

you say something small,
you laugh,
you look at me with those soft eyes —
and suddenly i’m smiling so wide
my cheeks hurt.

and for once,
i don’t care how imperfect it looks.

it’s strange, isn’t it?
how someone can make you feel
beautiful,
in the places you always felt broken.

i still hate my smile,
but when i’m with you,
    i love the reason it exists.`,
  },
  {
    id: "near-her-fire",
    title: "near her fire",
    meta: "admiration | freedom",
    firstLine: "i don’t want to change her — not the way she laughs too loud,",
    body: `i don’t want to change her —
not the way she laughs too loud,
or how she gets excited over the smallest things,
or how she lights up a room
without ever meaning to.

i just want to be close enough
to feel that warmth.

she’s fire —
not the kind you contain,
but the kind you respect,
the kind you watch in quiet awe
because somehow it makes the world
hurt a little less.

i never wanted to dim her spark,
never wanted her to shrink to fit beside me.
all i ever wanted
was a place near her light —
to watch her grow,
to root for her,
to love every version she becomes.

i love her as she is —
soft, wild, glowing, burning —
and maybe that’s enough.

not to hold her,
not to claim her,
but simply
to be near her fire.`,
  },
  {
    id: "worth-knowing",
    title: "worth knowing",
    meta: "depth | reality",
    firstLine: "everyone else noticed her beauty first — the pretty face, the charm,",
    body: `everyone else noticed her beauty first —
the pretty face, the charm,
the kind of girl people want
just so they can say they had her.

but me?
i noticed the quiet things —
the tiredness behind her eyes,
the weight she carries without telling anyone,
the strength it takes for her
to keep showing up
even when life keeps testing her.

i didn’t want her
because she was hurting —
i wanted her
because she was real.
because she feels deeply,
loves quietly,
and tries harder than anyone realizes.

i didn’t want to fix her,
or save her,
or turn her pain into a reason to stay.
i just wanted to be someone
she could lean on without fear,
a place that felt steady
in a world that keeps shaking.

i wanted to love her
in a way she’d never have to question —
soft, patient, honest.
the kind that stays
through her laughter and her silence,
her confidence and her doubt.

everyone else wanted the pretty girl.
i wanted the whole person —
the strong parts,
the scared parts,
the parts she hides,
the parts she’s still learning to love.

because she’s not just beautiful —
she’s worth knowing.
and that’s why i chose her.`,
  },
  {
    id: "under-the-same-sun",
    title: "under the same sun",
    meta: "silent love | gratitude",
    firstLine: "i look at her sometimes and it hits me —",
    body: `i look at her sometimes
and it hits me —
how lucky the man she chooses someday
is going to be.

not because she’s pretty
not just that,
but because she loves with this softness
that most people don’t even notice
until it’s gone.

and there i am —
wanting her quietly,
loving her carefully,
never saying too much
because she’s not mine to claim.

i wish i could tell her
how she makes my whole world slow down,
how her smile sticks with me
long after she’s gone,
how being beside her
feels like the closest thing to home
i’ve ever felt.

but for now,
i just admire her from where i am —
grateful i get to exist with her
under the same sun,
even if she’ll never be mine.`,
  },
  {
    id: "everything-everywhere",
    title: "everything, everywhere",
    meta: "missing you | longing",
    firstLine: "i miss her. i miss her genuine laughter,",
    body: `i miss her.

i miss her genuine laughter,
a laugh i never thought
that will be stuck in my head.

i miss her soothing voice,
it's as sweet as honey to my eardrums.
miss her random topics,
the way we laughed talking about it.

i miss her comforting smile,
it gives me peace i didn't know i wanted.
i seek it every day and night,
but i guess i can see it only on screen this time.

most of all i miss her eyes,
goddamn i can't put into words.
it pulls me in a world, into somewhere.
i don't even care where, 
but i know if i was given a chance —
i'll dive right in.

i can write up a whole damn essay 
just to talk about her eyes.
the way they look at me,
like they speak to me spiritually.

i'll trade the whole world —
if i can see those eyes every day
of my entire life.

i try to put it into words,
but it lives beyond letters and drama.

it's like a ray of sunshine
shining in my window at noon,
or the feeling of cold air 
filling my lungs.

i can't describe it well
but i know —
if her eyes can kill me,
i'll gladly face death.

i miss her,
in everything.
everywhere.
all the time.`,
  },
  {
    id: "to-the-world",
    title: "whispered world",
    meta: "confession | world",
    firstLine: "if i was ever asked to shout to the world how much i love you —",
    body: `if i was ever asked to shout
to the world how much i love you —

i’d whisper it in your ear.

because you’re my world.

this is one of those cheesy lines
i don’t know if you’d like.
but given the circumstances,
maybe it’s true.

you’ve become part of my world
in ways you don’t even realize.

in the small things i notice,
i think of you —
wondering if you’d like this
if you were here.

my eyes struggle in a sea of faces,
always searching for yours,
hoping to catch a glimpse
just to smile and move on.

and in the middle of random days
i find myself thinking of you,
daydreaming about things
i hope we’ll get to do.

maybe i’m right.

you’re my world now —
not because you’re mine,
but because you exist beside me.

and even if you never are,
i’m still glad
to be in the same earth as you.`,
  },
  {
    id: "words-wont-come-out",
    title: "rattled",
    meta: "pain | unrequited",
    firstLine: "i don't know what to say, words won't come out of my mouth.",
    body: `i don't know what to say,
words won't come out of my mouth.
i know we're not together
but why do i feel weird when you're around him.

i know i shouldn't be this way
i should be happy as your friend.
im trying.
i try.

but all comes to naught
my brain puzzled —
my heart rattled.

this is the type of feeling 
that i don't know what to do.
i hate this
but i dont hate you.

i actually hate myself,
for being like this.

but is it wrong?
when all i know —
is just to love.
with all my heart.

is it a sin?
knowing i will get hurt by this.
i love you but i know 
you won't turn your back for me.

i hate myself for needing love
that me myself don't even know what to give.
maybe in another time,
another life,
in another ways.

i wont be your second best.`,
  },
  {
    id: "courtesy-of-time",
    title: "courtesy of time",
    meta: "stillness | presence",
    firstLine: "the room has learned how to hold its breath.",
    body: `the room has learned how to hold its breath.
no words drifting between us,
no future trying to introduce itself.
just the soft agreement of presence,
unspoken, unclaimed.

earlier, my body was restless—
fear moving faster than thought,
an ache with no direction.
now it’s still,
as if it remembered how to be human again.

nothing shifted in the grand sense.
no turning point. no revelation.
only time slowing down
out of courtesy.

i used to think moments needed meaning
to be worth keeping.
tonight asks for nothing.

and somehow,
that’s enough.`,
  },
  {
    id: "i-still-adore-you",
    title: "from the sidelines",
    meta: "acceptance | adoration",
    firstLine: "your wont probably believe me but — i still adore you,",
    body: `your wont probably believe me
but —
i still adore you,
even though it hurts.

i don't regret it in any way,
im actually glad its you.

you made me do things
that's seemed impossible to me before.
you changed me in little ways,
i didn't even noticed.

you're always a something,
a someone —
that i'll hold on dearly,
even i can't have for myself.

a part of you will always live
with in me.

you don't know how much you mean
to me just by existing.
thank you for giving me the courage,
to try the things im scared of.

i want to see you win,
in every dreams that you have.
but most of all —
i hope you heal from the things
you can't talk about.

and also do things that you love,
things that makes you happy.

laugh,
cry,
get angry,
for that is you.

remember —
you're not too much,
they just don't understand.
so don't ever lower yourself,
for anyone.

i hope your destiny
brings you great joy,
even if i'm not a part of it.

but i'll always be here,
just on the sides.
like i always do,
just like i told you.

thank you, 
isha.`,
  },
];

// --------
// DOM helpers
// --------

const views = {
  home: document.getElementById("homeView"),
  poems: document.getElementById("poemsView"),
  about: document.getElementById("aboutView"),
};

const navButtons = Array.from(document.querySelectorAll(".nav-link"));
const poemsGrid = document.getElementById("poemsGrid");

const poemModal = document.getElementById("poemModal");
const poemModalBackdrop = document.getElementById("poemModalBackdrop");
const poemModalClose = document.getElementById("poemModalClose");
const poemModalTitle = document.getElementById("poemModalTitle");
const poemModalMeta = document.getElementById("poemModalMeta");
const poemModalBody = document.getElementById("poemModalBody");
const poemModalContent = document.querySelector(".poem-modal__content");

function resetPoemScroll() {
  const scrollWrapper = document.querySelector(".poem-modal__body-wrapper");
  if (scrollWrapper) {
    scrollWrapper.scrollTop = 0;
  }
  if (poemModalContent) {
    poemModalContent.scrollTop = 0;
  }
}

const randomPoemButton = document.getElementById("randomPoemButton");
const modeToggle = document.getElementById("modeToggle");

const cursorAura = document.getElementById("cursorAura");
const brandMark = document.getElementById("brandMark");
const heroSubtitle = document.querySelector(".hero-subtitle");

// --------
// Navigation
// --------

function activateView(name) {
  Object.entries(views).forEach(([key, section]) => {
    if (key === name) {
      section.classList.add("view--active");
    } else {
      section.classList.remove("view--active");
    }
  });

  navButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.target === name);
  });
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    activateView(target);
  });
});

// --------
// Poems grid
// --------

function renderPoems() {
  poemsGrid.innerHTML = "";
  poems.forEach((poem) => {
    const card = document.createElement("article");
    card.className = "poem-card";
    card.dataset.poemId = poem.id;
    card.innerHTML = `
      <h3 class="poem-card__title">${poem.title}</h3>
      <p class="poem-card__meta">${poem.meta}</p>
      <p class="poem-card__firstline">${poem.firstLine}</p>
    `;
    card.addEventListener("click", () => openPoem(poem.id));
    poemsGrid.appendChild(card);
  });
}

// --------
// Modal
// --------

function openPoem(id) {
  const poem = poems.find((p) => p.id === id);
  if (!poem) return;

  poemModalTitle.textContent = poem.title;
  poemModalMeta.textContent = poem.meta;
  poemModalBody.textContent = poem.body;

  poemModal.classList.add("is-open");
  poemModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  // Reset scroll position after modal is visible/layout is updated
  resetPoemScroll();
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(resetPoemScroll);
  }
}

function closePoemModal() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  poemModal.classList.remove("is-open");
  poemModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";

  // Ensure modal scroll is reset after closing as well
  resetPoemScroll();
}

poemModalClose.addEventListener("click", closePoemModal);
poemModalBackdrop.addEventListener("click", closePoemModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && poemModal.classList.contains("is-open")) {
    closePoemModal();
  }
});

// --------
// Random poem
// --------

function openRandomPoem() {
  if (!poems.length) return;
  const randomIndex = Math.floor(Math.random() * poems.length);
  activateView("poems");
  openPoem(poems[randomIndex].id);
}

randomPoemButton.addEventListener("click", openRandomPoem);

// --------
// Music Modal
// --------

const musicModal = document.getElementById("musicModal");
const musicModalBackdrop = document.getElementById("musicModalBackdrop");
const musicModalClose = document.getElementById("musicModalClose");
const musicBtn = document.getElementById("musicBtn");

function openMusicModal() {
  musicModal.classList.add("is-open");
  musicModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
}

function closeMusicModal() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  musicModal.classList.remove("is-open");
  musicModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
}

musicBtn.addEventListener("click", openMusicModal);
musicModalClose.addEventListener("click", closeMusicModal);
musicModalBackdrop.addEventListener("click", closeMusicModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && musicModal.classList.contains("is-open")) {
    closeMusicModal();
  }
});

// --------
// Warm night mode
// --------

const THEME_KEY = "sonder-theme";

function applyStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "night") {
      document.body.classList.add("theme-night");
    }
  } catch {
    // ignore
  }
}

function toggleTheme() {
  const isNight = document.body.classList.toggle("theme-night");
  try {
    localStorage.setItem(THEME_KEY, isNight ? "night" : "day");
  } catch {
    // ignore
  }
}

modeToggle.addEventListener("click", toggleTheme);

// --------
// Magic Details
// --------

// 1. Cursor Aura
function initCursorAura() {
  if (!cursorAura) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorAura.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursorAura.style.opacity = "0";
  });

  function update() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    cursorAura.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(update);
  }
  update();
}

// 2. Heartbeat Logo transition
function initBrandMark() {
  if (!brandMark) return;

  let hoverTimer;
  const originalMark = brandMark.textContent;

  brandMark.parentElement.addEventListener("mouseenter", () => {
    hoverTimer = setTimeout(() => {
      brandMark.textContent = "♥";
    }, 2000);
  });

  brandMark.parentElement.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimer);
    brandMark.textContent = originalMark;
  });
}

// 3. Living Verse Typing Effect
function initTypingEffect() {
  if (!heroSubtitle) return;

  const text = heroSubtitle.textContent.trim();
  heroSubtitle.textContent = "";

  let i = 0;
  function type() {
    if (i < text.length) {
      heroSubtitle.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  // Start typing after a small delay
  setTimeout(type, 1000);
}

// --------
// Init
// --------

document.addEventListener("DOMContentLoaded", () => {
  applyStoredTheme();
  renderPoems();

  // Magic Details
  initCursorAura();
  initBrandMark();
  initTypingEffect();
});