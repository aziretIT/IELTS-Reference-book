
const topics = [
    // ================= GRAMMAR =================
    {
        title: "Present Simple",
        category: "Grammar",
        description: "Habits, routines and facts.",
        explanation: `
01 // WHAT IS PRESENT SIMPLE?

We use Present Simple for habits, routines and facts.

02 // STRUCTURE

Positive:
I/You/We/They + V1
He/She/It + V1+s/es

Examples:
I study English every day.
She studies English every day.

Negative:
I don't study.
She doesn't study.

Questions:
Do you study?
Does she study?

03 // COMMON MISTAKES

Wrong: She go to school.
Correct: She goes to school.

Wrong: He doesn't likes tea.
Correct: He doesn't like tea.

04 // IELTS APPLICATION

Speaking:
"I usually spend my evenings studying English."

Writing:
"Education plays an important role in society."

REMEMBER:
After DOES or DOESN'T, use the base verb.
        `
    },
    {
        title: "Present Continuous",
        category: "Grammar",
        description: "Actions happening now or temporarily.",
        explanation: `
01 // STRUCTURE

Subject + am/is/are + verb-ing.

Examples:
I am studying.
She is reading.
They are working.

02 // WHEN DO WE USE IT?

• Actions happening now.
• Temporary situations.
• Changing situations.
• Arranged future plans.

03 // NEGATIVE AND QUESTIONS

I am not working.
Are you studying?
Is she reading?

04 // IELTS EXAMPLE

"More people are using technology in education."

COMMON MISTAKE:
Wrong: I am study.
Correct: I am studying.
        `
    },
    {
        title: "Past Simple",
        category: "Grammar",
        description: "Completed actions in the past.",
        explanation: `
01 // STRUCTURE

Subject + past form of the verb.

Regular:
work → worked

Irregular:
go → went
see → saw
write → wrote

02 // EXAMPLES

I studied yesterday.
She went to school last Monday.

03 // NEGATIVE

I did not go.
She didn't study.

04 // QUESTIONS

Did you go?
Did she study?

IMPORTANT:
After DID or DIDN'T, use the base verb.

IELTS:
Useful for describing past experiences in Speaking Part 2.
        `
    },
    {
        title: "Present Perfect",
        category: "Grammar",
        description: "Past actions connected to the present.",
        explanation: `
01 // STRUCTURE

Subject + have/has + V3.

Examples:
I have finished my homework.
She has visited London.

02 // USES

• Experiences without a specific past time.
• Actions continuing until now.
• Recent events relevant to the present.

03 // FOR AND SINCE

For = a period of time.
"I have studied English for three years."

Since = a starting point.
"I have studied English since 2023."

04 // IELTS APPLICATION

"I have always been interested in technology."

COMMON MISTAKE:
Wrong: I have seen him yesterday.
Correct: I saw him yesterday.
        `
    },
    {
        title: "Past Continuous",
        category: "Grammar",
        description: "Actions in progress at a past time.",
        explanation: `
01 // STRUCTURE

Subject + was/were + verb-ing.

Examples:
I was studying.
They were playing.

02 // WHEN DO WE USE IT?

For an action in progress at a past moment.

Example:
"I was studying when my friend called."

03 // TWO ACTIONS

"I was cooking while my brother was reading."

04 // IELTS APPLICATION

Useful for describing past experiences and events.

REMEMBER:
Past Continuous describes an action in progress, not simply a completed event.
        `
    },
    {
        title: "Future Forms",
        category: "Grammar",
        description: "Talk about plans, predictions and decisions.",
        explanation: `
01 // WILL

Predictions, promises and spontaneous decisions.

"I think technology will develop rapidly."

02 // GOING TO

Plans and predictions based on evidence.

"I am going to take the IELTS test."

03 // PRESENT CONTINUOUS

Arranged future plans.

"I am meeting my teacher tomorrow."

04 // IELTS APPLICATION

"Governments will probably invest more in renewable energy."

TIP:
Choose the form that matches your intended meaning.
        `
    },
    {
        title: "Conditionals",
        category: "Grammar",
        description: "Real and imaginary situations.",
        explanation: `
ZERO CONDITIONAL:
If + Present Simple, Present Simple.

"If you heat ice, it melts."

FIRST CONDITIONAL:
If + Present Simple, will + V1.

"If I study, I will improve."

SECOND CONDITIONAL:
If + Past Simple, would + V1.

"If I had more time, I would learn Python."

THIRD CONDITIONAL:
If + Past Perfect, would have + V3.

"If I had studied, I would have passed."

IELTS:
"If public transport were cheaper, more people might use it."

COMMON MISTAKE:
Wrong: If I will study, I will pass.
Correct: If I study, I will pass.
        `
    },
    {
        title: "Passive Voice",
        category: "Grammar",
        description: "Focus on actions and results.",
        explanation: `
01 // STRUCTURE

Subject + be + V3.

Active:
People use the internet worldwide.

Passive:
The internet is used worldwide.

02 // EXAMPLES

Present: The room is cleaned.
Past: The bridge was built.
Future: The project will be completed.

03 // WHEN DO WE USE IT?

• When the actor is unknown.
• When the action is more important.
• In formal and academic writing.

04 // IELTS APPLICATION

Useful for Writing Task 1 process diagrams.

Example:
"The materials are transported to the factory."

COMMON MISTAKE:
Wrong: The building built in 2010.
Correct: The building was built in 2010.
        `
    },
    {
        title: "Articles: A, An, The",
        category: "Grammar",
        description: "Use English articles correctly.",
        explanation: `
A:
Before a singular countable noun beginning with a consonant sound.

Example: a book, a university.

AN:
Before a singular countable noun beginning with a vowel sound.

Example: an apple, an hour.

THE:
For a specific or already identified thing.

Example: The book on the table is mine.

NO ARTICLE:
Often used for general plural and uncountable nouns.

Examples:
Education is important.
Students need support.

IELTS TIP:
Check articles when proofreading your writing.
        `
    },
    {
        title: "Relative Clauses",
        category: "Grammar",
        description: "Add detail to nouns.",
        explanation: `
WHO: Used for people.
"The student who won is my friend."

WHICH: Used for things.
"The book which I bought is useful."

THAT: Used for people or things in defining clauses.
"The course that I chose is challenging."

WHERE: Used for places.
"This is the school where I studied."

IELTS EXAMPLE:
"Students who have access to good resources may find learning easier."

TIP:
Use relative clauses to combine ideas without making sentences confusing.
        `
    },
    {
        title: "Modal Verbs",
        category: "Grammar",
        description: "Express ability, advice and possibility.",
        explanation: `
CAN:
Ability or possibility.
"I can speak English."

COULD:
Past ability or a suggestion.
"We could improve public transport."

SHOULD:
Advice.
"Students should practise regularly."

MUST:
Strong obligation.
"Candidates must follow the instructions."

MIGHT / MAY:
Possibility.
"Technology might change education."

HAVE TO:
Necessity.
"Students have to complete the assignment."

IELTS:
Use modal verbs when discussing solutions and predictions.
        `
    },
    {
        title: "Comparatives and Superlatives",
        category: "Grammar",
        description: "Compare people, things and data.",
        explanation: `
COMPARATIVE:
Compare two things.

"Online learning is cheaper than private tutoring."

SUPERLATIVE:
Identify the highest or lowest degree.

"January was the coldest month."

IRREGULAR FORMS:
good → better → best
bad → worse → worst

IELTS WRITING:
"The figure for France was higher than that for Spain."

TASK 1 TIP:
Use accurate comparisons instead of describing every figure separately.
        `
    },
    {
        title: "Gerunds and Infinitives",
        category: "Grammar",
        description: "Understand verb + -ing and verb + to.",
        explanation: `
GERUND = verb + ing.

"I enjoy reading."
"Learning English takes time."

INFINITIVE = to + base verb.

"I want to improve."
"She decided to study."

COMMON PATTERNS:
enjoy doing
avoid doing
finish doing
want to do
hope to do
decide to do

IELTS EXAMPLE:
"Many people prefer working from home."

TIP:
Learn which form follows common verbs.
        `
    },
    {
        title: "Subject-Verb Agreement",
        category: "Grammar",
        description: "Make subjects and verbs agree.",
        explanation: `
SINGULAR:
He works.
The student studies.

PLURAL:
They work.
The students study.

COMMON EXAMPLES:
Everyone is ready.
People are different.
The number of students is increasing.
A number of students are absent.

IELTS TIP:
Check the real subject of long sentences.

COMMON MISTAKE:
Wrong: The benefits of exercise is clear.
Correct: The benefits of exercise are clear.
        `
    },
    {
        title: "Prepositions",
        category: "Grammar",
        description: "Use in, on, at and other prepositions.",
        explanation: `
TIME:
At 8 o'clock.
On Monday.
In October.
In 2026.

PLACE:
At school.
On the table.
In the room.

COMMON COMBINATIONS:
interested in
responsible for
depend on
beneficial to
impact on
increase in

IELTS EXAMPLE:
"Technology has a significant impact on education."

TIP:
Learn prepositions as part of phrases rather than memorising isolated words.
        `
    },

    // ================= VOCABULARY =================
    {
        title: "Advanced Vocabulary",
        category: "Vocabulary",
        description: "Useful words for IELTS Band 7+.",
        explanation: `
SIGNIFICANT — important or noticeable.
"Education has a significant impact on society."

BENEFICIAL — helpful.
"Reading is beneficial for students."

DETRIMENTAL — harmful.
"Pollution is detrimental to health."

SUBSTANTIAL — large or considerable.
"The city experienced a substantial increase."

MITIGATE — make something less harmful.
"Governments should mitigate environmental damage."

SUSTAINABLE — able to continue over time.
"Cities need sustainable transport."

ENHANCE — improve.
"Technology can enhance learning."

CRUCIAL — extremely important.
"Education is crucial for development."

ALLOCATE — distribute resources.
"Governments should allocate more money to schools."

CONSEQUENTLY — as a result.
"Housing became expensive. Consequently, some families moved."

TIP:
Learn definitions, pronunciation, collocations and examples.
        `
    },
    {
        title: "Education Vocabulary",
        category: "Vocabulary",
        description: "Words for education essays.",
        explanation: `
CURRICULUM — subjects taught in a course.
ASSESSMENT — evaluation of performance.
LITERACY — the ability to read and write.
SCHOLARSHIP — financial support for study.
CRITICAL THINKING — evaluating information logically.
ACADEMIC PERFORMANCE — how well a student performs.
VOCATIONAL TRAINING — training for a particular occupation.
HIGHER EDUCATION — education after secondary school.

EXAMPLE:
"Schools should encourage critical thinking rather than memorisation."

IELTS TIP:
Learn collocations and use the words in your own sentences.
        `
    },
    {
        title: "Environment Vocabulary",
        category: "Vocabulary",
        description: "Discuss climate and environmental problems.",
        explanation: `
CLIMATE CHANGE — long-term changes in climate.
RENEWABLE ENERGY — energy from naturally replenished sources.
DEFORESTATION — removal of forests.
BIODIVERSITY — variety of living organisms.
CARBON EMISSIONS — gases released into the atmosphere.
SUSTAINABLE DEVELOPMENT — development considering long-term needs.
HABITAT DESTRUCTION — damage to natural living environments.
WASTE MANAGEMENT — handling and reducing waste.

EXAMPLE:
"Governments should invest in renewable energy to reduce carbon emissions."

IELTS TIP:
Explain problems, causes and realistic solutions.
        `
    },
    {
        title: "Technology Vocabulary",
        category: "Vocabulary",
        description: "Discuss AI, innovation and the internet.",
        explanation: `
ARTIFICIAL INTELLIGENCE — computer systems performing tasks associated with intelligence.
AUTOMATION — using technology to perform tasks automatically.
INNOVATION — a new idea, method or product.
DATA PRIVACY — protection of personal information.
DIGITAL LITERACY — the ability to use digital technology effectively.
CYBERSECURITY — protection of systems and information.
DIGITAL DIVIDE — unequal access to technology.
PRODUCTIVITY — the amount of work produced.

EXAMPLE:
"Artificial intelligence can improve productivity but also raise concerns about data privacy."

IELTS TIP:
Discuss both the benefits and risks of technology.
        `
    },
    {
        title: "Health Vocabulary",
        category: "Vocabulary",
        description: "Discuss public health and lifestyles.",
        explanation: `
PREVENTIVE CARE — measures that help prevent illness.
SEDENTARY LIFESTYLE — a lifestyle with little physical activity.
NUTRITION — obtaining nutrients from food.
MENTAL WELL-BEING — psychological and emotional wellness.
PUBLIC HEALTH — the health of communities.
LIFE EXPECTANCY — the average expected lifespan.
HEALTHCARE SYSTEM — organisations providing medical services.
BALANCED DIET — eating a variety of necessary nutrients.

EXAMPLE:
"Public education can help people make informed health decisions."

IELTS TIP:
Discuss lifestyle, education and public policy.
        `
    },
    {
        title: "Work and Career Vocabulary",
        category: "Vocabulary",
        description: "Discuss employment and professional life.",
        explanation: `
EMPLOYMENT — having paid work.
CAREER PROSPECTS — future career opportunities.
WORK-LIFE BALANCE — balance between work and personal life.
JOB SATISFACTION — satisfaction with one's job.
QUALIFICATIONS — credentials showing knowledge or skills.
REMOTE WORK — working away from a central workplace.
UNEMPLOYMENT — the state of not having a job.
PROFESSIONAL DEVELOPMENT — improving work-related skills.

EXAMPLE:
"Flexible working arrangements may improve work-life balance."

IELTS TIP:
Compare different working arrangements and their consequences.
        `
    },
    {
        title: "Crime and Law Vocabulary",
        category: "Vocabulary",
        description: "Discuss crime, punishment and justice.",
        explanation: `
CRIME RATE — the frequency of crime in an area.
LAW ENFORCEMENT — activities that ensure laws are followed.
REHABILITATION — helping offenders return to society.
DETERRENCE — discouraging unwanted behaviour.
COMMUNITY SERVICE — unpaid work benefiting the community.
LEGAL SYSTEM — institutions and procedures related to law.
REOFFENDING — committing another offence.

EXAMPLE:
"Some people believe that rehabilitation can reduce reoffending."

IELTS TIP:
Explain different approaches to crime prevention and punishment.
        `
    },
    {
        title: "Government and Society Vocabulary",
        category: "Vocabulary",
        description: "Discuss public policy and social issues.",
        explanation: `
PUBLIC POLICY — decisions and actions by governments.
PUBLIC SERVICES — services provided for communities.
INFRASTRUCTURE — essential systems such as roads and transport.
INEQUALITY — an unfair difference in opportunities or resources.
SOCIAL WELFARE — support for people's well-being.
TAXATION — the collection of taxes.
CITIZENSHIP — membership and participation in a society.

EXAMPLE:
"Governments should invest in public transport and infrastructure."

IELTS TIP:
Explain who is responsible and how policies may work.
        `
    },
    {
        title: "Linking Words",
        category: "Vocabulary",
        description: "Connect ideas clearly in IELTS.",
        explanation: `
ADDITION:
Furthermore, Moreover, In addition.

CONTRAST:
However, Nevertheless, On the other hand.

RESULT:
Therefore, Consequently, As a result.

EXAMPLES:
For instance, For example.

CONCESSION:
Although, Even though, Despite.

EXAMPLE:
"Public transport is affordable. Furthermore, it reduces traffic."

TIP:
Use connectors naturally. Too many linking words can make writing awkward.
        `
    },
    {
        title: "Paraphrasing",
        category: "Vocabulary",
        description: "Express the same idea in different words.",
        explanation: `
WHAT IS PARAPHRASING?

Expressing the same meaning using different words or sentence structures.

EXAMPLE:
Original: Many people use the internet.
Paraphrase: A large number of individuals access the internet.

USEFUL TECHNIQUES:
1. Replace words with accurate synonyms.
2. Change the sentence structure.
3. Change the grammatical form where appropriate.
4. Keep the original meaning.

IELTS APPLICATION:
Writing Task 1 introductions and Writing Task 2 introductions.

IMPORTANT:
Do not replace words with synonyms that change the meaning.
        `
    },
    {
        title: "Idioms for Speaking",
        category: "Vocabulary",
        description: "Natural expressions for familiar situations.",
        explanation: `
GET THE BALL ROLLING — start something.
"Let's get the ball rolling."

LEARN THE ROPES — learn how something works.
"I needed time to learn the ropes."

A PIECE OF CAKE — something very easy.
"The first exercise was a piece of cake."

ON THE SAME PAGE — share the same understanding.
"We need to be on the same page."

ONCE IN A BLUE MOON — very rarely.
"I eat fast food once in a blue moon."

IELTS TIP:
Use idioms only when they fit the context naturally.
Do not force idioms into every answer.
        `
    },

    // ================= LISTENING =================
    {
        title: "Listening: Multiple Choice",
        category: "Listening",
        description: "Choose the correct option from audio.",
        explanation: `
01 // STRATEGY

1. Read the question and options.
2. Identify differences between the options.
3. Predict possible paraphrases.
4. Listen for the speaker's actual meaning.
5. Eliminate incorrect answers.

02 // COMMON TRAPS

The speaker may mention an option and then reject it.

03 // EXAMPLE

Question: Why did Anna change her course?

A. It was too expensive.
B. Her timetable changed.
C. She lost interest.

Audio meaning:
"The price worried me at first, but I eventually changed because the new timetable clashed with my job."

Answer: B.

TIP:
Do not choose an option just because you hear the same word.
        `
    },
    {
        title: "Listening: Form Completion",
        category: "Listening",
        description: "Complete forms with missing information.",
        explanation: `
TASK:
Complete a form using information from a recording.

LISTEN FOR:
• Names and surnames.
• Addresses and postcodes.
• Phone numbers.
• Dates and times.
• Prices.

STRATEGY:
1. Read the form before listening.
2. Predict the type of missing information.
3. Listen for the answer.
4. Check spelling and word limits.

EXAMPLE:
Course: Computer Science
Start date: 12 September

TIP:
Practise numbers, dates and spelling regularly.
        `
    },
    {
        title: "Listening: Note Completion",
        category: "Listening",
        description: "Complete notes from a recording.",
        explanation: `
TASK:
Fill gaps in notes while listening.

STRATEGY:
1. Read the notes in advance.
2. Identify the topic.
3. Predict the missing word type.
4. Listen for synonyms.
5. Check grammar and spelling.

EXAMPLE:
"The library opens at ______."

Audio: "You can enter the library from half past eight."

Answer: 8:30 or half past eight, depending on the instructions.

TIP:
Follow the word limit and do not get stuck on one gap.
        `
    },
    {
        title: "Listening: Sentence Completion",
        category: "Listening",
        description: "Complete sentences from audio.",
        explanation: `
TASK:
Fill sentence gaps with information from the recording.

STRATEGY:
1. Read the full sentence.
2. Predict what is missing.
3. Listen for the relevant detail.
4. Check grammar and word limits.

EXAMPLE:
"The train was delayed because of ______."

Audio: "Heavy snow caused the delay."

Answer: heavy snow.

TIP:
Your answer must fit both the meaning and grammar.
        `
    },
    {
        title: "Listening: Summary Completion",
        category: "Listening",
        description: "Complete a summary of the recording.",
        explanation: `
TASK:
Fill gaps in a summary using information from audio.

STRATEGY:
1. Read the summary first.
2. Identify the topic and structure.
3. Predict missing word types.
4. Listen for paraphrases.
5. Check the word limit.

IMPORTANT:
The summary may use different wording from the audio.

TIP:
Follow the development of the talk and keep your place.
        `
    },
    {
        title: "Listening: Map Labelling",
        category: "Listening",
        description: "Find locations by following directions.",
        explanation: `
DIRECTION VOCABULARY:
Turn left.
Turn right.
Go straight ahead.
Opposite.
Next to.
Between.
At the end of the corridor.
In the corner.

STRATEGY:
1. Examine the map before listening.
2. Identify the starting point.
3. Follow directions in order.
4. Notice landmarks and changes of direction.

EXAMPLE:
"The café is opposite the main entrance."

TIP:
Practise direction vocabulary and reading maps quickly.
        `
    },
    {
        title: "Listening: Matching",
        category: "Listening",
        description: "Match people, places or ideas with options.",
        explanation: `
TASK:
Match statements or people to the correct options.

STRATEGY:
1. Read all options.
2. Identify how options differ.
3. Listen for paraphrases.
4. Watch for changes of opinion.
5. Check each match.

IMPORTANT:
A speaker may mention several options, but only one may fit the final meaning.

TIP:
Listen for ideas, not only repeated words.
        `
    },
    {
        title: "Listening: Short Answer Questions",
        category: "Listening",
        description: "Answer questions with a few words.",
        explanation: `
TASK:
Answer questions using information from the recording.

STRATEGY:
1. Read the question.
2. Identify whether it asks for a person, place, reason or number.
3. Listen for the detail.
4. Follow the word limit.

EXAMPLE:
Question: Where will the meeting take place?
Audio: "We will meet in Room 12."

Answer: Room 12.

TIP:
Write only the information needed.
        `
    },
    {
        title: "Listening: Labelling a Diagram",
        category: "Listening",
        description: "Identify parts of a diagram from audio.",
        explanation: `
TASK:
Label parts of a picture, machine, building or process.

STRATEGY:
1. Study the diagram.
2. Read existing labels.
3. Predict the missing parts.
4. Follow the speaker's description.
5. Check spelling.

TIP:
Pay attention to location words such as above, below, beside and inside.
        `
    },
    {
        title: "Listening: Distractors",
        category: "Listening",
        description: "Avoid misleading options in the audio.",
        explanation: `
WHAT IS A DISTRACTOR?

Information that sounds like a possible answer but does not match the final meaning.

EXAMPLE:
"I planned to take the morning train, but it was cancelled, so I booked the afternoon one."

If asked which train the speaker will take, the answer is the afternoon train.

STRATEGY:
• Listen for corrections.
• Notice contrast words: but, however, actually.
• Follow the final decision.
• Do not answer too early.
        `
    },

    // ================= READING =================
    {
        title: "Reading: True / False / Not Given",
        category: "Reading",
        description: "Compare statements with factual information.",
        explanation: `
TRUE:
The passage supports the statement.

FALSE:
The passage contradicts the statement.

NOT GIVEN:
The passage does not provide enough information.

EXAMPLE:

Passage:
"Maria moved to London in 2020."

Statement:
"Maria moved to London in 2020."

Answer: TRUE.

Statement:
"Maria moved to London because she wanted a better job."

Answer: NOT GIVEN.

STRATEGY:
Find the evidence, compare meaning and avoid personal assumptions.
        `
    },
    {
        title: "Reading: Yes / No / Not Given",
        category: "Reading",
        description: "Identify the writer's views and claims.",
        explanation: `
YES:
The statement agrees with the writer's view.

NO:
The statement contradicts the writer's view.

NOT GIVEN:
The writer's view is not stated clearly enough.

DIFFERENCE:
True / False / Not Given generally concerns factual information.
Yes / No / Not Given concerns the writer's views or claims.

STRATEGY:
Identify the writer's position and compare its meaning with the statement.
        `
    },
    {
        title: "Reading: Matching Headings",
        category: "Reading",
        description: "Find the main idea of each paragraph.",
        explanation: `
TASK:
Choose the heading that best summarises each paragraph.

STRATEGY:
1. Read the heading list.
2. Identify the paragraph's main idea.
3. Ignore minor details.
4. Eliminate headings that are too broad or narrow.

IMPORTANT:
The first sentence may help, but read the entire paragraph.

TIP:
Match meaning, not just identical vocabulary.
        `
    },
    {
        title: "Reading: Matching Information",
        category: "Reading",
        description: "Find where specific information appears.",
        explanation: `
TASK:
Identify the paragraph containing particular information.

STRATEGY:
1. Underline the key idea.
2. Think of synonyms.
3. Scan the passage.
4. Read the relevant section carefully.

IMPORTANT:
This task asks where information appears, not necessarily the main idea.

TIP:
Practise scanning and recognising paraphrases.
        `
    },
    {
        title: "Reading: Matching Features",
        category: "Reading",
        description: "Match people or categories with statements.",
        explanation: `
TASK:
Match statements to people, places, theories or categories.

STRATEGY:
1. Read the list of features.
2. Identify names and keywords.
3. Locate relevant information.
4. Compare the meanings.

IMPORTANT:
Check whether features can be used more than once.

TIP:
Look for paraphrases, not just names.
        `
    },
    {
        title: "Reading: Multiple Choice",
        category: "Reading",
        description: "Select the correct answer from the passage.",
        explanation: `
STRATEGY:
1. Read the question.
2. Locate the relevant part of the passage.
3. Compare all options.
4. Eliminate unsupported or contradictory choices.

COMMON TRAPS:
• The option repeats words but changes the meaning.
• The answer is partly correct but misses the question.
• The option uses information from another paragraph.

TIP:
Choose the answer supported by evidence.
        `
    },
    {
        title: "Reading: Sentence Completion",
        category: "Reading",
        description: "Complete sentences using passage information.",
        explanation: `
TASK:
Complete sentences with words from the text.

STRATEGY:
1. Read the sentence.
2. Predict the missing word.
3. Find the relevant passage.
4. Check grammar and word limits.

IMPORTANT:
Your answer must fit the sentence and preserve the original meaning.

TIP:
Check singular and plural nouns.
        `
    },
    {
        title: "Reading: Summary Completion",
        category: "Reading",
        description: "Complete a summary of the passage.",
        explanation: `
TASK:
Fill gaps in a summary using passage information.

The answers may come from a word list or directly from the text.

STRATEGY:
1. Read the complete summary.
2. Predict missing word types.
3. Locate relevant information.
4. Check grammar and word limits.

TIP:
Recognise paraphrases and do not rely on identical wording.
        `
    },
    {
        title: "Reading: Short Answer Questions",
        category: "Reading",
        description: "Answer questions using the passage.",
        explanation: `
TASK:
Answer questions with words from the text.

STRATEGY:
1. Identify the question type.
2. Locate the relevant information.
3. Write only the necessary words.
4. Check the word limit.

EXAMPLE:
Question: When did the museum open?
Passage: The museum first opened in 1998.

Answer: 1998.

TIP:
Keep your answer short and accurate.
        `
    },
    {
        title: "Reading: Matching Sentence Endings",
        category: "Reading",
        description: "Complete sentences with the correct endings.",
        explanation: `
TASK:
Match the beginning of each sentence with the correct ending.

STRATEGY:
1. Read each sentence beginning.
2. Understand the main idea.
3. Check the options.
4. Find evidence in the passage.
5. Make sure the completed sentence is logical.

TIP:
Do not choose an ending just because it is grammatically possible. It must match the passage.
        `
    },
    {
        title: "Reading: Identifying Information",
        category: "Reading",
        description: "Determine whether statements match the text.",
        explanation: `
TASK:
Identify whether a statement agrees with information in the passage.

STRATEGY:
1. Identify the claim.
2. Find the relevant paragraph.
3. Compare details carefully.
4. Follow the exact instructions given.

IMPORTANT:
Read whether the task asks for TRUE/FALSE/NOT GIVEN or YES/NO/NOT GIVEN. These tasks assess different things.
        `
    },

    // ================= WRITING TASK 1 =================
    {
        title: "Writing Task 1: Line Graph",
        category: "Writing",
        description: "Describe changes and trends over time.",
        explanation: `
STRUCTURE:
1. Introduction.
2. Overview.
3. Body paragraph 1.
4. Body paragraph 2.

INTRODUCTION:
Paraphrase what the graph shows.

OVERVIEW:
Identify the main trends.

USEFUL VERBS:
rose, increased, climbed, fell, declined, fluctuated, remained stable.

EXAMPLE:
"The number of students increased from 100 in 2010 to 200 in 2020."

TIP:
Compare key figures and avoid listing every data point.
        `
    },
    {
        title: "Writing Task 1: Bar Chart",
        category: "Writing",
        description: "Compare categories and figures.",
        explanation: `
STRUCTURE:
Introduction → Overview → Body 1 → Body 2.

INTRODUCTION:
Paraphrase the chart description.

OVERVIEW:
Describe the largest differences and main patterns.

USEFUL LANGUAGE:
• The highest figure was...
• In comparison...
• A similar pattern can be seen...
• The figure for X was twice that of Y.

TIP:
Group related information and report accurate figures.
        `
    },
    {
        title: "Writing Task 1: Pie Chart",
        category: "Writing",
        description: "Describe proportions and percentages.",
        explanation: `
USEFUL LANGUAGE:
accounted for, represented, made up, the largest proportion, approximately half, just under a quarter.

EXAMPLE:
"Transport accounted for 30% of total expenditure."

STRUCTURE:
1. Introduction.
2. Overview.
3. Compare the main categories.
4. Include key percentages.

TIP:
Highlight important similarities and differences.
        `
    },
    {
        title: "Writing Task 1: Table",
        category: "Writing",
        description: "Summarise and compare tabular data.",
        explanation: `
STRATEGY:
1. Read titles, labels and units.
2. Identify highest and lowest figures.
3. Find similarities and differences.
4. Group related data into paragraphs.

USEFUL LANGUAGE:
compared with, respectively, whereas, approximately, stood at.

TIP:
Select important comparisons rather than describing every cell.
        `
    },
    {
        title: "Writing Task 1: Process Diagram",
        category: "Writing",
        description: "Explain stages in a process.",
        explanation: `
STRUCTURE:
1. Introduction.
2. Overview.
3. Describe early stages.
4. Describe later stages.

SEQUENCING:
Initially, subsequently, next, after this, finally.

PASSIVE VOICE:
"The material is heated."
"The product is transported."

TIP:
Describe the stages in order and avoid adding information not shown in the diagram.
        `
    },
    {
        title: "Writing Task 1: Maps",
        category: "Writing",
        description: "Describe changes to a place over time.",
        explanation: `
USEFUL LANGUAGE:
was constructed, was demolished, was converted into, was replaced by, was expanded, remained unchanged.

EXAMPLE:
"The old factory was replaced by a residential complex."

STRUCTURE:
1. Introduction.
2. Overview of the main changes.
3. Describe one group of changes.
4. Describe the remaining changes.

TIP:
Use accurate location language and compare the maps.
        `
    },
    {
        title: "Writing Task 1: Multiple Charts",
        category: "Writing",
        description: "Describe two or more visuals together.",
        explanation: `
TASK:
Analyse two or more related charts, tables or graphs.

STRATEGY:
1. Understand what each visual shows.
2. Identify shared topics.
3. Find the most important relationships.
4. Group related comparisons.
5. Include accurate figures.

TIP:
Do not describe each visual in isolation if the data can be compared.
        `
    },

    // ================= WRITING TASK 2 =================
    {
        title: "Writing Task 2: Agree or Disagree",
        category: "Writing",
        description: "Defend your opinion with clear arguments.",
        explanation: `
STRUCTURE:
Introduction → Body 1 → Body 2 → Conclusion.

INTRODUCTION:
Paraphrase the statement and state your opinion.

BODY:
Give a clear argument, explain it and support it with an example.

USEFUL EXPRESSIONS:
I strongly agree that...
One important reason is...
This is because...
For example...

CONCLUSION:
Summarise your position.

TIP:
Maintain a clear position throughout the essay.
        `
    },
    {
        title: "Writing Task 2: Discuss Both Views",
        category: "Writing",
        description: "Discuss two opinions and give your view.",
        explanation: `
STRUCTURE:
1. Introduction.
2. Explain the first view.
3. Explain the second view and your position.
4. Conclusion.

USEFUL LANGUAGE:
"Supporters of this view argue that..."
"On the other hand..."
"From my perspective..."

TIP:
Discuss both sides fairly and make your own opinion clear.
        `
    },
    {
        title: "Writing Task 2: Advantages and Disadvantages",
        category: "Writing",
        description: "Evaluate benefits and drawbacks.",
        explanation: `
STRUCTURE:
1. Introduction.
2. Advantages.
3. Disadvantages.
4. Conclusion.

USEFUL LANGUAGE:
"One significant advantage is..."
"A major drawback is..."
"Despite these benefits..."

IMPORTANT:
Some questions ask whether the advantages outweigh the disadvantages. In that case, give a clear judgement.

TIP:
Develop ideas rather than merely listing them.
        `
    },
    {
        title: "Writing Task 2: Problems and Solutions",
        category: "Writing",
        description: "Explain problems and propose solutions.",
        explanation: `
STRUCTURE:
1. Introduction.
2. Main problems and causes.
3. Solutions.
4. Conclusion.

USEFUL LANGUAGE:
"One major problem is..."
"This is largely caused by..."
"A practical solution would be..."
"Authorities could address this issue by..."

TIP:
Make sure each proposed solution addresses an identified problem.
        `
    },
    {
        title: "Writing Task 2: Causes and Effects",
        category: "Writing",
        description: "Explain why something happens and its consequences.",
        explanation: `
CAUSE LANGUAGE:
This can be attributed to...
One contributing factor is...
This is partly due to...

EFFECT LANGUAGE:
As a result...
Consequently...
This can lead to...

STRUCTURE:
Introduction → Causes → Effects → Conclusion.

TIP:
Clearly distinguish causes from consequences.
        `
    },
    {
        title: "Writing Task 2: Two-Part Question",
        category: "Writing",
        description: "Answer both questions in one essay.",
        explanation: `
STRATEGY:
1. Identify both questions.
2. Plan an answer for each.
3. Use one main paragraph for each question.
4. Check that both questions are answered.
5. Conclude clearly.

IMPORTANT:
A well-written essay can still lose marks if part of the task is unanswered.

TIP:
Underline both questions before planning.
        `
    },
    {
        title: "Writing Task 2: Essay Structure",
        category: "Writing",
        description: "Organise a clear and coherent essay.",
        explanation: `
INTRODUCTION:
Paraphrase the question and state your position or main response.

BODY PARAGRAPH:
1. Topic sentence.
2. Explanation.
3. Example or evidence.
4. Link to the main argument.

CONCLUSION:
Summarise your main ideas and answer the question.

IELTS CHECKLIST:
• Address the task.
• Organise ideas logically.
• Use accurate vocabulary.
• Vary sentence structures.
• Check grammar and spelling.

ACADEMIC WRITING:
Avoid informal language and unsupported generalisations.
        `
    },

    // ================= SPEAKING =================
    {
        title: "Speaking Part 1",
        category: "Speaking",
        description: "Answer questions about familiar topics.",
        explanation: `
TOPICS:
Studies, work, hometown, hobbies, food and daily routines.

ANSWER FORMULA:
Direct answer + Reason + Detail.

QUESTION:
"Do you enjoy reading?"

EXAMPLE:
"Yes, I do. I particularly enjoy technology articles because they help me learn new things."

TIPS:
• Avoid one-word answers.
• Speak naturally.
• Do not memorise full answers.
• Use vocabulary you understand.
        `
    },
    {
        title: "Speaking Part 2",
        category: "Speaking",
        description: "Speak for 1–2 minutes on a topic.",
        explanation: `
You have one minute to prepare and then speak for 1–2 minutes.

PLAN:
1. Introduce the topic.
2. Explain the background.
3. Add specific details.
4. Explain why it matters to you.

PREPARATION:
Write keywords, not complete sentences.

TIPS:
• Give a clear beginning and ending.
• Add specific details.
• Explain your feelings or reasons.
• Keep talking until the examiner stops you.
        `
    },
    {
        title: "Speaking Part 3",
        category: "Speaking",
        description: "Develop deeper and more analytical answers.",
        explanation: `
Part 3 explores broader and more abstract questions.

ANSWER STRUCTURE:
Opinion + Explanation + Example + Result.

QUESTION:
"Why is technology important in education?"

EXAMPLE:
"Technology is important because it gives students access to more learning materials. For example, online platforms allow learners to study subjects that may not be available at their schools. As a result, education can become more accessible."

TIPS:
• Explain WHY.
• Compare past and present where relevant.
• Discuss advantages and disadvantages.
• Avoid answers that are too short.
        `
    },
    {
        title: "Speaking: Fluency",
        category: "Speaking",
        description: "Speak smoothly and develop your answers.",
        explanation: `
WHAT IS FLUENCY?

Fluency means communicating ideas at a natural pace with appropriate continuity.

HOW TO IMPROVE:
1. Speak aloud daily.
2. Record short answers.
3. Practise explaining ideas without reading.
4. Learn useful phrases.
5. Repeat answers and improve them.

IMPORTANT:
Fluency does not mean speaking as fast as possible.

TIP:
Prioritise clear ideas and natural communication.
        `
    },
    {
        title: "Speaking: Pronunciation",
        category: "Speaking",
        description: "Improve clarity, stress and intonation.",
        explanation: `
IMPORTANT FEATURES:
• Word stress.
• Sentence stress.
• Intonation.
• Individual sounds.
• Connected speech.

PRACTICE:
1. Listen to a short sentence.
2. Repeat it aloud.
3. Record yourself.
4. Compare your pronunciation.
5. Repeat difficult words.

TIP:
Your goal is to be understandable, not to imitate a particular accent.
        `
    },
    {
        title: "Speaking: Common Topics",
        category: "Speaking",
        description: "Prepare ideas for frequent IELTS topics.",
        explanation: `
COMMON TOPICS:
• Education.
• Technology.
• Environment.
• Hometown.
• Work and careers.
• Travel.
• Health.
• Hobbies.
• Family and friends.
• Books and films.

HOW TO PREPARE:
For each topic, prepare vocabulary, personal examples and reasons.

IMPORTANT:
Prepare flexible ideas rather than memorising complete scripts.
        `
    },

    // ================= IELTS OVERVIEW =================
    {
        title: "IELTS Band Scores",
        category: "IELTS Basics",
        description: "Understand the scoring system.",
        explanation: `
IELTS HAS FOUR SKILLS:
Listening, Reading, Writing and Speaking.

Each skill receives a band score from 0 to 9.

OVERALL BAND:
The overall score is calculated from the four skill scores and rounded to the nearest half or whole band according to IELTS rules.

WHAT AFFECTS YOUR SCORE?

Listening and Reading:
Correct answers determine your score. Conversion tables vary by test.

Writing:
Task achievement or response, coherence and cohesion, vocabulary, and grammar.

Speaking:
Fluency and coherence, vocabulary, grammar, and pronunciation.

TIP:
Track each skill separately and focus on your weakest area.
        `
    },
    {
        title: "IELTS Academic vs General Training",
        category: "IELTS Basics",
        description: "Understand the two IELTS test versions.",
        explanation: `
IELTS ACADEMIC:
Usually used for university admission and some professional registration.

IELTS GENERAL TRAINING:
Often used for migration, work or other purposes.

LISTENING:
The same test format for both versions.

SPEAKING:
The same test format for both versions.

READING AND WRITING:
The content and tasks differ.

IMPORTANT:
Check the exact requirements of your university or organisation before booking.
        `
    },
    {
        title: "IELTS Study Strategy",
        category: "IELTS Basics",
        description: "Build an effective preparation routine.",
        explanation: `
STEP 1:
Take a practice test to identify weaknesses.

STEP 2:
Set a realistic target for each skill.

STEP 3:
Practise regularly using timed exercises.

STEP 4:
Review every mistake and identify why it happened.

STEP 5:
Repeat similar questions to check improvement.

DAILY ROUTINE EXAMPLE:
• 30 minutes Reading.
• 30 minutes Listening.
• 20 minutes vocabulary and grammar.
• 20 minutes Speaking or Writing.

IMPORTANT:
Use official band descriptors and reliable practice materials when possible.

TIP:
Quality review matters as much as the number of tests completed.
        `
    }
];

// ================= FUTURISTIC LIBRARY =================

const library = document.getElementById("library");
const search = document.getElementById("search");

let activeCategory = "All";

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function displayTopics(items) {
    library.innerHTML = "";

    if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.innerHTML = `
            <h3>NO RESULTS FOUND</h3>
            <p>Try another keyword or choose a different category.</p>
        `;
        library.appendChild(empty);
        return;
    }

    items.forEach((topic, index) => {
        const card = document.createElement("article");
        card.className = "card";
        card.style.animationDelay = `${Math.min(index * 0.04, 0.5)}s`;

        const category = document.createElement("span");
        category.className = "category";
        category.textContent = topic.category;

        const title = document.createElement("h3");
        title.textContent = topic.title;

        const description = document.createElement("p");
        description.textContent = topic.description;

        const hint = document.createElement("span");
        hint.className = "hint";
        hint.textContent = "ACCESS LESSON ↗";

        card.append(category, title, description, hint);

        card.addEventListener("click", () => openLesson(topic));

        library.appendChild(card);
    });
}

function showCategory(category) {
    activeCategory = category;
    filterTopics();
}

function filterTopics() {
    const query = search.value.toLowerCase().trim();

    const filtered = topics.filter(topic => {
        const matchesCategory =
            activeCategory === "All" ||
            topic.category === activeCategory;

        const searchableText = [
            topic.title,
            topic.category,
            topic.description,
            topic.explanation
        ].join(" ").toLowerCase();

        return matchesCategory && searchableText.includes(query);
    });

    displayTopics(filtered);
}

search.addEventListener("input", filterTopics);

// ================= LESSON WINDOW =================

function openLesson(topic) {
    const lessonWindow = window.open("", "_blank");

    if (!lessonWindow) {
        alert("Разреши всплывающие окна для открытия уроков.");
        return;
    }

    const currentIndex = topics.findIndex(
        item => item.title === topic.title
    );

    const previousTopic = topics[currentIndex - 1];
    const nextTopic = topics[currentIndex + 1];

    lessonWindow.document.open();
    lessonWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#050711">
<title>${escapeHTML(topic.title)} | IELTS Library</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

:root {
    --bg: #050711;
    --cyan: #00f5ff;
    --purple: #a855f7;
    --pink: #ff36c7;
    --text: #eef5ff;
    --muted: #9aa9c2;
    --border: rgba(0,245,255,.2);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    color: var(--text);
    font-family: 'Inter', sans-serif;
    background:
        radial-gradient(ellipse at 10% 5%, #10264b, transparent 40%),
        radial-gradient(ellipse at 90% 25%, #25113e, transparent 38%),
        #050711;
    background-attachment: fixed;
    animation: pageEnter .5s ease both;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image:
        linear-gradient(rgba(0,245,255,.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,245,255,.035) 1px, transparent 1px);
    background-size: 42px 42px;
    mask-image: linear-gradient(to bottom, black, transparent 90%);
    animation: gridMove 25s linear infinite;
}

@keyframes gridMove {
    to { background-position: 42px 42px; }
}

@keyframes pageEnter {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes riseIn {
    from {
        opacity: 0;
        transform: translateY(22px);
        filter: blur(4px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
}

@keyframes glow {
    from { opacity: .06; transform: scale(.9); }
    to { opacity: .17; transform: scale(1.12); }
}

.topbar {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 17px clamp(16px, 5vw, 65px);
    background: rgba(5,7,17,.84);
    border-bottom: 1px solid rgba(255,255,255,.08);
    backdrop-filter: blur(20px);
}

.logo {
    font: 800 15px 'Orbitron', sans-serif;
    letter-spacing: 1px;
}

.logo span {
    color: var(--cyan);
}

.top-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    border: 1px solid #2a3a53;
    border-radius: 8px;
    color: var(--text);
    background: #101728;
    font: 600 12px 'Inter', sans-serif;
    text-decoration: none;
    cursor: pointer;
    transition: .3s ease;
}

.action:hover:not(:disabled) {
    color: var(--cyan);
    border-color: var(--cyan);
    box-shadow: 0 0 20px rgba(0,245,255,.12);
    transform: translateY(-2px);
}

.action.primary {
    background: var(--cyan);
    color: #061019;
    border-color: var(--cyan);
}

.action.primary:hover:not(:disabled) {
    background: #b8fcff;
    box-shadow: 0 0 30px rgba(0,245,255,.3);
}

.action:disabled {
    opacity: .3;
    cursor: not-allowed;
}

.hero {
    position: relative;
    max-width: 1000px;
    margin: auto;
    padding: 65px 24px 30px;
    animation: riseIn .65s .08s both;
}

.hero::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 15px;
    left: 15%;
    width: 260px;
    height: 260px;
    background: var(--purple);
    filter: blur(110px);
    animation: glow 5s ease-in-out infinite alternate;
}

.eyebrow {
    display: inline-block;
    padding: 7px 11px;
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--cyan);
    background: rgba(0,245,255,.05);
    font: 600 10px 'Orbitron', sans-serif;
    letter-spacing: 1.3px;
    text-transform: uppercase;
}

h1 {
    margin-top: 23px;
    font: 800 clamp(28px, 5vw, 48px)/1.25 'Orbitron', sans-serif;
    letter-spacing: -1px;
    overflow-wrap: anywhere;
}

.subtitle {
    margin-top: 16px;
    color: var(--muted);
    line-height: 1.8;
    font-size: 14px;
}

.content {
    max-width: 1000px;
    margin: auto;
    padding: 20px 24px 75px;
}

.lesson-panel {
    position: relative;
    overflow: hidden;
    padding: clamp(22px, 4vw, 42px);
    border: 1px solid rgba(126,157,205,.2);
    border-radius: 18px;
    background: linear-gradient(145deg, rgba(17,26,47,.95), rgba(8,13,27,.97));
    box-shadow: 0 20px 70px rgba(0,0,0,.22);
    animation: riseIn .75s .15s both;
}

.lesson-panel::before {
    content: "";
    position: absolute;
    top: 0;
    left: 8%;
    width: 84%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cyan), var(--purple), transparent);
}

.progress-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 22px;
    color: var(--muted);
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.progress-track {
    height: 3px;
    margin-bottom: 30px;
    overflow: hidden;
    border-radius: 5px;
    background: #202a3e;
}

.progress-fill {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--cyan), var(--purple), var(--pink));
    box-shadow: 0 0 15px rgba(0,245,255,.45);
    transform-origin: left;
    animation: loadBar 1s ease both;
}

@keyframes loadBar {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
}

.lesson-text {
    color: #d5e0f1;
    font-size: 14px;
    line-height: 2;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
}

.lesson-text::selection {
    color: #050711;
    background: var(--cyan);
}

.bottom-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    margin-top: 24px;
    animation: riseIn .8s .25s both;
}

footer {
    padding: 25px 15px;
    border-top: 1px solid rgba(255,255,255,.07);
    color: #64748b;
    text-align: center;
    font-size: 11px;
    line-height: 2;
}

@media (max-width: 600px) {
    .topbar {
        align-items: flex-start;
        flex-direction: column;
    }

    .hero {
        padding-top: 42px;
    }

    .content {
        padding-inline: 14px;
    }

    .lesson-panel {
        padding: 20px 16px;
    }

    .lesson-text {
        font-size: 13px;
        line-height: 1.85;
    }

    .bottom-nav .action {
        flex: 1;
    }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
        scroll-behavior: auto !important;
    }
}
</style>
</head>

<body>
    <nav class="topbar">
        <div class="logo">IELTS<span>LIBRARY</span></div>
        <div class="top-actions">
            <button class="action" id="backButton">← Library</button>
            <button class="action primary" id="readButton">Read mode</button>
        </div>
    </nav>

    <section class="hero">
        <span class="eyebrow">${escapeHTML(topic.category)} / LESSON</span>
        <h1>${escapeHTML(topic.title)}</h1>
        <p class="subtitle">${escapeHTML(topic.description)}</p>
    </section>

    <main class="content">
        <section class="lesson-panel">
            <div class="progress-row">
                <span>Knowledge base</span>
                <span>IELTS / 2026</span>
            </div>
            <div class="progress-track">
                <div class="progress-fill"></div>
            </div>
            <article class="lesson-text" id="lessonText"></article>
        </section>

        <div class="bottom-nav">
            <button class="action" id="previousButton">← Previous lesson</button>
            <button class="action primary" id="nextButton">Next lesson →</button>
        </div>
    </main>

    <footer>
        IELTS LIBRARY © 2026<br>
        SMALL STEPS EVERY DAY.
    </footer>
</body>
</html>
    `);
    lessonWindow.document.close();

    const doc = lessonWindow.document;
    const lessonText = doc.getElementById("lessonText");

    lessonText.textContent = topic.explanation.trim();

    doc.getElementById("backButton").addEventListener("click", () => {
        lessonWindow.close();
    });

    let readingMode = false;

    doc.getElementById("readButton").addEventListener("click", event => {
        readingMode = !readingMode;
        lessonText.style.fontSize = readingMode ? "17px" : "";
        lessonText.style.lineHeight = readingMode ? "2.2" : "";
        event.currentTarget.textContent = readingMode
            ? "Normal mode"
            : "Read mode";
    });

    function navigateTo(newIndex) {
        if (newIndex < 0 || newIndex >= topics.length) return;

        const nextTopic = topics[newIndex];
        lessonWindow.close();
        openLesson(nextTopic);
    }

    const previousButton = doc.getElementById("previousButton");
    const nextButton = doc.getElementById("nextButton");

    previousButton.disabled = currentIndex <= 0;
    nextButton.disabled = currentIndex >= topics.length - 1;

    previousButton.addEventListener("click", () => {
        navigateTo(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        navigateTo(currentIndex + 1);
    });
}

// ================= INITIALISE =================

displayTopics(topics);
