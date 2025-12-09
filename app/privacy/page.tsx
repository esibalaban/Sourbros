import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | sourbros",
  description: "Privacy Policy for the sourbros app and website.",
};

const POLICY = `# Privacy Policy

Effective date: December 1, 2025

This Privacy Policy explains how "sourbros" ("we", "us", "our") collects, uses, and shares information when you use our mobile app and website.

## Information We Collect
- Account information you provide (e.g., username, profile details).
- Content you submit (e.g., posts, comments, images).
- Usage data (e.g., app interactions, device information, diagnostics).
- Approximate location (if you grant permission in your device settings).

## How We Use Information
- To operate, maintain, and improve the app and website.
- To personalize features and content.
- To monitor usage, ensure safety, prevent abuse, and fix issues.

## Sharing
We do not sell your personal information. We may share information:
- With service providers who help us operate the app (bound by confidentiality obligations).
- To comply with the law, protect rights, safety, and the integrity of our services.

## Data Retention
We retain information for as long as necessary to provide the service and for legitimate business or legal purposes. We take reasonable measures to protect your data.

## Your Choices
- You can manage permissions (e.g., location, notifications) in your device settings.
- You can request deletion of your account and associated data as permitted by law.

## Children's Privacy
Our services are not directed to children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect data from children.

## Changes to This Policy
We may update this Privacy Policy from time to time. Material changes will be indicated by updating the "Effective date" above. Continued use after changes means you accept the updated policy.

## Contact
If you have questions or requests about this Privacy Policy, please contact us using the support contact listed in our app store listing or within the app.
`;

export default function PrivacyPage() {
  return (
    <main
      className="min-h-screen p-8"
      style={{ backgroundColor: "rgb(247, 235, 217)" }}
    >
      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-900">
        {POLICY}
      </pre>
    </main>
  );
}


