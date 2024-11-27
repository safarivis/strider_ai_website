import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

interface NewsletterRequest {
  email: string;
  name: string;
}

// Newsletter signup endpoint
app.post('/api/newsletter', async (req: Request<{}, {}, NewsletterRequest>, res: Response) => {
  try {
    const { email, name } = req.body;

    // TODO: Add your newsletter service integration here
    // Example using Mailchimp:
    // const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    //   email_address: email,
    //   status: 'subscribed',
    //   merge_fields: {
    //     FNAME: name
    //   }
    // });

    // For now, just log the submission
    console.log('Newsletter signup:', { email, name });

    res.status(200).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    res.status(500).json({ message: 'Failed to subscribe to newsletter' });
  }
});

// Serve index.html for all routes (for client-side routing)
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
