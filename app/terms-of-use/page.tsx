import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
      
      <div className="prose prose-lg">
        <p className="mb-6">
          Welcome to the official website of Impact Delivery Group, LLC (&quot;IDG,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located at impactdeliverygroup.com (the &quot;Website&quot;).
        </p>

        <p className="mb-6">
          Please carefully review these Terms of Use before accessing or using the Website. By continuing to use this Website, you acknowledge and agree to comply with these Terms of Use, as well as our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms of Use or the Privacy Policy, you should not access or use this Website.
        </p>

        <p className="mb-6">
          These Terms of Use, along with any supplemental terms explicitly referenced, govern your access to and use of the Website, including its content, materials, and services.
        </p>

        <p className="mb-6">
          This Website is intended for users 18 years of age or older who reside in the United States or its territories. By using the Website, you confirm that you meet these eligibility requirements and are legally authorized to enter into a binding contract with Impact Delivery Group, LLC. If you do not meet these requirements, you may not access or use the Website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Rights</h2>
        <p className="mb-6">
          We retain the right to modify, suspend, or discontinue this Website, including any services or materials provided, at our sole discretion and without prior notice. We are not responsible for any temporary or extended unavailability of all or part of the Website, regardless of the reason.
        </p>
        <p className="mb-6">
          Additionally, we may, from time to time, impose restrictions on user access—including registered users—to certain sections or the entire Website as necessary.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">General Information Disclaimer</h2>
        <p className="mb-6">
          The information provided on this Website is intended solely for general informational purposes. We make no guarantees regarding its accuracy, completeness, or usefulness. Any reliance on this information is at your own risk, and we expressly disclaim all liability for any consequences resulting from such reliance—whether by you, other visitors, or anyone informed of its contents.
        </p>
        <p className="mb-6">
          Additionally, this Website may feature content from third parties, including contributions from users, bloggers, licensors, syndicators, aggregators, and reporting services. Any statements, opinions, articles, responses, or other content—except for material officially provided by the Company—solely reflect the views and responsibility of the respective authors or entities. These materials do not necessarily represent the views of the Company, and we assume no liability for their content or accuracy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Geographic Restrictions</h2>
        <p className="mb-6">
          Impact Delivery Group, LLC (IDG) is headquartered in North Carolina, United States, and this Website is intended for use by individuals located within the United States. We make no representations that the Website or its content is accessible or appropriate outside of the U.S. Access to this Website may be restricted or prohibited in certain countries or by certain individuals. If you choose to access the Website from outside the United States, you do so at your own risk and are solely responsible for compliance with applicable local laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Responsibilities</h2>
        <p className="mb-6">
          You are responsible for ensuring that you have the necessary technology to access this Website and for making sure that anyone using your internet connection is aware of and complies with these Terms of Use.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Usage Restrictions</h2>
        <p className="mb-4">You may not:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Modify, reproduce, or distribute copies of any materials from this Website.</li>
          <li>Use illustrations, photographs, videos, audio sequences, or graphics separately from their accompanying text.</li>
          <li>Remove, alter, or obscure any copyright, trademark, or proprietary rights notices from Website materials.</li>
        </ul>
        <p className="mb-6">
          Additionally, you must not use any part of this Website, its content, or services for commercial purposes unless explicitly permitted.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Violation of Terms</h2>
        <p className="mb-6">
          Unauthorized use—including copying, modifying, downloading, or providing access to Website content in violation of these Terms—will result in the immediate termination of your right to use the Website. At our discretion, you may be required to return or destroy any unauthorized copies. No rights, titles, or interests in the Website or its content are transferred to you, and all rights remain reserved by IDG.
        </p>
        <p className="mb-6">
          Any unauthorized use of this Website constitutes a breach of these Terms and may violate copyright, trademark, or other applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prohibited Uses</h2>
        <p className="mb-4">You may use this Website solely for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website in the following ways:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>In violation of any applicable laws or regulations, including federal, state, local, or international laws related to data or software exports.</li>
          <li>To exploit, harm, or attempt to harm minors, whether by exposing them to inappropriate content, requesting personal information, or any other means.</li>
          <li>To send, receive, upload, download, or re-use material that does not comply with the Content Standards outlined in these Terms of Use.</li>
          <li>To distribute unauthorized advertising or promotional content, including junk mail, chain letters, spam, or similar solicitations, without our prior written consent.</li>
          <li>To impersonate the Company, its employees, another user, or any other entity—including using false email credentials or identities.</li>
          <li>To engage in conduct that disrupts others&apos; access to the Website or causes harm to the Company or users, as determined by us.</li>
          <li>To overload, damage, or interfere with Website functionality, including real-time interactions.</li>
          <li>To use automated means (such as bots, spiders, or scraping tools) for data collection, monitoring, or duplication of Website materials.</li>
          <li>To manually copy or monitor Website content for purposes not expressly permitted in these Terms, without prior written approval.</li>
          <li>To introduce malicious software or harmful code, including viruses, Trojan horses, worms, or other cyber threats.</li>
          <li>To attempt unauthorized access to Website components, servers, databases, or connected networks.</li>
          <li>To engage in denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks.</li>
          <li>To interfere with Website operations in any other way.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Permitted Uses</h2>
        <p className="mb-4">You may:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Temporarily store Website materials in RAM during access and browsing.</li>
          <li>Cache files in your Web browser for display optimization.</li>
          <li>Print one copy of a reasonable number of Website pages for personal, non-commercial use (without reproduction or distribution).</li>
          <li>Download a single copy of any permitted downloadable content to your device, provided you agree to the end-user license agreement for such content.</li>
          <li>Engage with social media features that we provide for designated Website content.</li>
        </ul>
        <p className="mb-6">
          If you wish to use any Website materials beyond these permitted uses, please send a request to: wecanhelp@impactdeliverygroup.com.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Registration</h2>
        <p className="mb-6">
          To access this Website or certain resources it offers, you may need to provide registration details or other information. It is a condition of use that all information you submit is accurate, current, and complete.
        </p>
        <p className="mb-6">
          By registering or using any interactive features on this Website, you agree that your information is governed by our Privacy Policy and consent to the handling of your data as outlined therein.
        </p>
        <p className="mb-6">
          If you choose or are provided with a username, password, or other security credentials, you must treat this information as confidential and refrain from sharing it with others. Your account is personal to you, and you must not allow others to access the Website using your credentials.
        </p>
        <p className="mb-6">
          You must promptly notify us of any unauthorized use or security breach and ensure you log out at the end of each session. Use extra caution when accessing your account from a public or shared device to prevent unauthorized access.
        </p>
        <p className="mb-6">
          We reserve the right to disable any username, password, or other identifiers at our discretion if we determine that a violation of these Terms of Use has occurred.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property Rights</h2>
        <p className="mb-6">
          This Website, including its content, features, and functionality—such as text, images, videos, software, and design elements—is owned by Impact Delivery Group, LLC (IDG) or its licensors. It is protected by U.S. and international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>
        <p className="mb-4">These Terms of Use grant you the right to use this Website solely for personal, non-commercial purposes. You may not:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Reproduce, distribute, modify, or create derivative works of Website materials.</li>
          <li>Publicly display, perform, republish, download, store, or transmit Website content without explicit permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Trademarks</h2>
        <p className="mb-6">
          Impact Delivery Group, LLC (IDG), along with its name, logo, product/service names, designs, and slogans, are trademarks of IDG or its affiliates. You may not use these marks without prior written permission. All other trademarks appearing on this Website belong to their respective owners.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">User Contributions</h2>
        <p className="mb-6">
          The Website may feature interactive services, such as forums, profiles, message boards, and other user-generated content areas. Any materials posted or submitted by users (&quot;User Contributions&quot;) must comply with our Content Standards.
        </p>
        <p className="mb-6">
          By submitting User Contributions, you grant IDG and its affiliates the right to use, reproduce, modify, display, distribute, and disclose such content as permitted under your account settings.
        </p>
        <p className="mb-4">You represent and warrant that:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>You own or control all rights necessary to grant this license.</li>
          <li>Your User Contributions comply with these Terms of Use.</li>
        </ul>
        <p className="mb-6">
          You acknowledge that you are solely responsible for your User Contributions, including their legality, reliability, accuracy, and appropriateness. IDG is not liable for third-party reliance on User Contributions posted on the Website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Monitoring, Enforcement, & Termination</h2>
        <p className="mb-4">We reserve the right to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Remove or refuse to post User Contributions at our sole discretion.</li>
          <li>Take action against any material that violates our Terms of Use, intellectual property rights, or user safety.</li>
          <li>Disclose user identities to third parties in cases of rights violations or privacy concerns.</li>
          <li>Refer matters to law enforcement for illegal or unauthorized Website use.</li>
          <li>Suspend or terminate Website access for violations of these Terms.</li>
        </ul>
        <p className="mb-6">
          We may cooperate with law enforcement authorities when legally required to disclose user identities and information. YOU WAIVE AND HOLD HARMLESS IDG AND ITS AFFILIATES FROM ANY CLAIMS RESULTING FROM ENFORCEMENT ACTIONS OR LEGAL INVESTIGATIONS.
        </p>
        <p className="mb-6">
          While we reserve the right to moderate content, we do not guarantee immediate removal of objectionable material. IDG assumes no liability for user-generated content or interactions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Content Standards</h2>
        <p className="mb-6">
          These standards apply to all User Contributions and interactions within the Website&apos;s Interactive Services. All contributions must fully comply with applicable federal, state, local, and international laws and regulations.
        </p>
        <p className="mb-4">User Contributions must not:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Contain defamatory, obscene, offensive, abusive, harassing, violent, hateful, or otherwise objectionable material.</li>
          <li>Promote sexually explicit content, violence, or discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age.</li>
          <li>Infringe upon any intellectual property rights, including patents, trademarks, copyrights, or trade secrets.</li>
          <li>Violate the privacy, publicity rights, or legal protections of others or create potential civil or criminal liability.</li>
          <li>Mislead, deceive, or manipulate others.</li>
          <li>Encourage illegal activities or assist in unlawful actions.</li>
          <li>Cause disruption, embarrassment, or undue distress to any individual.</li>
          <li>Impersonate others or misrepresent identity or affiliations.</li>
          <li>Involve unauthorized commercial activities, such as advertisements, promotions, or barter transactions.</li>
          <li>Falsely imply endorsement, sponsorship, or affiliation with IDG or any third party.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Copyright Infringement</h2>
        <p className="mb-6">
          If you believe any User Contributions infringe upon your copyright, please refer to our Copyright Policy for guidance on submitting a formal notice of copyright infringement. The Company enforces a policy of terminating repeat infringers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Website Updates</h2>
        <p className="mb-6">
          We may periodically update Website content, but we do not guarantee that all materials are current or complete. Any content may become outdated at any time, and we are under no obligation to update it.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Linking to Our Website</h2>
        <p className="mb-6">
          You may link to our homepage, provided the link is fair, legal, and does not harm our reputation or suggest endorsement without prior written consent.
        </p>
        <p className="mb-6">
          We retain the right to request link removal at any time. If requested, you must immediately remove the link.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Social Media Features</h2>
        <p className="mb-4">Our Website may offer social media tools that allow you to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Link to specific Website content from your own site or third-party platforms.</li>
          <li>Share Website content via email or other communication channels.</li>
          <li>Display limited portions of Website content on external sites.</li>
        </ul>
        <p className="mb-6">
          You may use these features only as provided and solely with the associated content, following any additional terms we specify. You must not:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Link from websites that do not belong to you.</li>
          <li>Display our Website or its content using framing, deep linking, or in-line linking.</li>
          <li>Link to any page other than the homepage.</li>
          <li>Violate any other provisions of these Terms of Use.</li>
        </ul>
        <p className="mb-6">
          If linking or embedding Website content, the external site must comply with these Content Standards. We reserve the right to withdraw linking permissions at our discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Links from Our Website</h2>
        <p className="mb-6">
          Our Website may contain links to third-party resources, including advertisements and sponsored content. These links are provided for convenience only, and IDG has no control over third-party content.
        </p>
        <p className="mb-6">
          We do not endorse or assume responsibility for any linked websites or damages resulting from their use. If you choose to access third-party links, you do so at your own risk and subject to their respective terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Warranties Disclaimer</h2>
        <p className="mb-6">
          We cannot and do not guarantee that any files available for download from the internet or this Website will be free from viruses or other harmful code. You are solely responsible for implementing appropriate security measures, including virus protection and data backups, to safeguard your systems and prevent data loss.
        </p>
        <p className="mb-6">
          To the fullest extent permitted by law, we will not be liable for any damages or losses resulting from viruses, distributed denial-of-service (DDoS) attacks, or other harmful technology that may affect your computer, software, data, or proprietary materials due to your use of this Website or any linked resources.
        </p>
        <p className="mb-6">
          Your use of this Website, its content, and any services or materials is at your own risk. The Website is provided &quot;as is&quot; and &quot;as available&quot;, without any warranties, express or implied.
        </p>
        <p className="mb-4">We do not guarantee or warrant:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>That the Website, its content, or services will be accurate, reliable, error-free, or uninterrupted.</li>
          <li>That defects will be corrected.</li>
          <li>That our Website or its hosting servers are free from viruses or harmful components.</li>
          <li>That the Website or its services will meet your expectations or needs.</li>
        </ul>
        <p className="mb-6">
          To the fullest extent permitted by law, we disclaim all warranties, including but not limited to merchantability, non-infringement, and fitness for a particular purpose.
        </p>
        <p className="mb-6">
          This disclaimer does not affect any warranties that cannot be excluded under applicable law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          To the maximum extent permitted by law, neither the Company nor its affiliates, licensors, service providers, employees, agents, officers, or directors will be liable for any damages arising from your use—or inability to use—the Website, linked sites, or related content.
        </p>
        <p className="mb-4">This includes, but is not limited to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Direct, indirect, special, incidental, consequential, or punitive damages.</li>
          <li>Personal injury, emotional distress, lost revenue, lost profits, lost business, lost data, or loss of goodwill.</li>
        </ul>
        <p className="mb-6">
          These limitations do not apply to liability resulting from our gross negligence or willful misconduct.
        </p>
        <p className="mb-6">
          This provision does not affect liability protections that cannot be excluded under applicable law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
        <p className="mb-6">
          You agree to defend, indemnify, and hold harmless the Company, its affiliates, and service providers—including their respective officers, directors, employees, contractors, and agents—against any claims, liabilities, damages, losses, or expenses resulting from:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Your violation of these Terms of Use.</li>
          <li>Your User Contributions.</li>
          <li>Your unauthorized use of Website content, services, or information.</li>
        </ul>
        <p className="mb-6">
          This includes reasonable legal fees incurred in connection with such claims.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law & Jurisdiction</h2>
        <p className="mb-6">
          All matters related to this Website and these Terms of Use will be governed by the internal laws of North Carolina, without regard to its conflict of law provisions.
        </p>
        <p className="mb-6">
          Any legal actions arising from these Terms must be filed exclusively in federal or state courts located in Raleigh, North Carolina. However, the Company reserves the right to bring legal action in your country of residence or another relevant jurisdiction if necessary.
        </p>
        <p className="mb-6">
          By using this Website, you waive any objections to jurisdiction or venue in these courts.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Arbitration</h2>
        <p className="mb-6">
          At our sole discretion, we may require disputes related to these Terms or Website usage to be resolved through binding arbitration under the Rules of the American Arbitration Association, applying North Carolina law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation on Time to File Claims</h2>
        <p className="mb-6">
          Any claims or legal actions arising from your use of this Website or these Terms must be filed within one (1) year of the event giving rise to the claim. Failure to do so permanently bars such claims.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Waiver & Severability</h2>
        <p className="mb-6">
          The Company&apos;s failure to enforce any provision of these Terms of Use shall not be considered a waiver of that term, nor shall it constitute a continued or future waiver of the same or any other provision. Likewise, the Company&apos;s decision not to assert a right or provision under these Terms shall not be interpreted as a waiver of that right.
        </p>
        <p className="mb-6">
          If any provision of these Terms of Use is determined to be invalid, illegal, or unenforceable by a court or tribunal of competent jurisdiction, that provision shall be modified or removed to the minimum extent necessary, ensuring that the remainder of the Terms remain in full force and effect.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Entire Agreement</h2>
        <p className="mb-6">
          These Terms of Use, along with our Privacy Policy, constitute the complete and exclusive agreement between you and Impact Delivery Group, LLC (IDG) regarding your use of this Website. They supersede all prior agreements, representations, and warranties, whether written or oral.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to the Terms of Use</h2>
        <p className="mb-6">
          We may revise or update these Terms of Use at our sole discretion. Changes take effect immediately upon posting and apply to all Website access and use thereafter.
        </p>
        <p className="mb-6">
          By continuing to use the Website after updates are posted, you indicate your acceptance of the revised Terms. You are encouraged to review this page regularly to stay informed, as all modifications are legally binding.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Communications</h2>
        <p className="mb-6">
          This Website is operated by IDG, LLC. Any feedback, inquiries, technical support requests, or other communications related to the Website should be directed to wecanhelp@impactdeliverygroup.com and will be governed by our Disclaimer.
        </p>

        <p className="text-center mb-8 text-gray-400">© 2025 Impact Delivery Group LLC. ALL RIGHTS RESERVED.</p>
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-sm">
          <Link href="/privacy-policy" className="hover:underline">Privacy Notice</Link>
          <div className="flex items-center">
            <Link href="/privacy-choices" className="hover:underline">Your Privacy Choices</Link>
            <ShieldCheck className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
} 