# NEO Rental Agent - Website

## Overview
Static HTML website for NEO Rental Agent - a full-service property management and real estate brokerage in Northeast Ohio.

- **Production:** https://neohiorent.com
- **Business:** Property management, real estate brokerage (buy/sell/manage)
- **Service Area:** Lorain, Cleveland, Akron, Elyria, Medina, Sandusky counties

## Hosting
- **Provider:** Hostinger (same account as amherstarmory.com)
- **SSH Access:** `ssh -p 65002 u582515363@82.29.199.16`
- **Web Root:** `~/domains/neohiorent.com/public_html/`

## Site Structure

### Pages
| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services overview, stats, map |
| For Landlords | `landlords.html` | Property management services, consultation form |
| Available Rentals | `available-rentals.html` | Links to ManageBuilding portal |
| Tenants | `tenants.html` | Tenant resources, pay rent, maintenance |
| About | `about.html` | Company history, team info |
| Contact | `contact.html` | Contact form, office info, map |
| FAQ | `faq.html` | Frequently asked questions |

### Location Pages (SEO)
- `property-management-lorain-ohio.html`
- `property-management-cleveland-ohio.html`
- `property-management-akron-ohio.html`
- `property-management-elyria-ohio.html`
- `property-management-medina-ohio.html`
- `property-management-sandusky-ohio.html`

### Assets
```
/css/
  styles.css        - Main stylesheet
/js/
  main.js           - JavaScript functionality
/images/
  [various images]  - Site images
```

### SEO Files
- `robots.txt` - Search engine crawler rules
- `sitemap.xml` - XML sitemap for search engines
- `llms.txt` - LLM context file for AI crawlers

## Contact Form

### Configuration
- **File:** `send-email.php`
- **Current Recipient:** `john@h8s.us` (testing)
- **Production Recipient:** `Kstrader@neorentalagent.com`

### Form Fields
- Name (required)
- Email (required)
- Phone (required)
- Type (Property Owner, Prospective Tenant, Current Tenant, Other)
- Message (required)

### To Change Email Recipient
```bash
ssh -p 65002 u582515363@82.29.199.16
nano ~/domains/neohiorent.com/public_html/send-email.php
# Edit the $to_email variable on line 15
```

## External Integrations

### AppFolio (NEW - Migrating from ManageBuilding)
**STATUS: PENDING - Need URLs from Mike**

NEO Rental Agent has moved to AppFolio. Need to get the following URLs from Mike:
- **Tenant Portal URL** - Usually `https://[companyname].appfolio.com/connect`
- **Available Rentals/Listings URL** - For prospective tenants
- **Online Application URL** - For new tenant applications

### ManageBuilding (OLD - TO BE REPLACED)
~~- **Available Rentals:** https://neorentalagent.managebuilding.com/Resident/Public/Rentals~~
~~- **Apply Online:** https://neorentalagent.managebuilding.com/Resident/rental-application/new~~
~~- **Pay Rent:** https://neorentalagent.managebuilding.com/Resident/public/home~~
~~- **Maintenance:** https://neorentalagent.managebuilding.com/Resident/public/home~~

### Files to Update After Getting AppFolio URLs
1. `available-rentals.html` - Update rental listing links
2. `tenants.html` - Update pay rent & maintenance links
3. `index.html` - Update any portal links on homepage
4. `landlords.html` - Check for any tenant portal references

### Google Business Profile
- **Status:** Being claimed by team member (da...@...)
- **Current Rating:** 1.0 (1 review) - needs attention
- **Address:** 1927 Cooper Foster Park Rd Suite A, Amherst, OH 44001

## Changelog

### 2024-12-04 - Contact Form & Documentation
- Changed contact form email to `john@h8s.us` for testing
- Created README documentation
- Synced server files to local project folder

### 2024-12-04 - Initial Site Build
- Created responsive static HTML website
- Built all main pages (Home, Landlords, Tenants, About, Contact, FAQ)
- Created location-specific SEO pages for major cities
- Implemented contact form with PHP email handler
- Added Google Maps embed
- Created sitemap.xml and robots.txt
- Added llms.txt for AI crawler context
- Connected to ManageBuilding tenant portal

## Useful Commands

```bash
# SSH to server
ssh -p 65002 u582515363@82.29.199.16

# Navigate to site
cd ~/domains/neohiorent.com/public_html/

# Download files to local
scp -P 65002 -r u582515363@82.29.199.16:~/domains/neohiorent.com/public_html/* /home/john/projects/neohiorent.com/

# Upload single file
scp -P 65002 /home/john/projects/neohiorent.com/send-email.php u582515363@82.29.199.16:~/domains/neohiorent.com/public_html/

# Upload all files
scp -P 65002 -r /home/john/projects/neohiorent.com/* u582515363@82.29.199.16:~/domains/neohiorent.com/public_html/
```

## To-Do / Future Improvements

### PRIORITY - AppFolio Migration
- [ ] **Get AppFolio URLs from Mike** (tenant portal, rentals, applications)
- [ ] Update `available-rentals.html` with AppFolio listing URL
- [ ] Update `tenants.html` with AppFolio pay rent/maintenance URLs
- [ ] Update `index.html` if any portal links exist
- [ ] Test all new links work correctly
- [ ] Upload updated files to server

### Other Tasks
- [ ] Claim Google Business Profile (in progress)
- [ ] Address 1-star Google review
- [ ] Add testimonials/reviews section
- [ ] Set up Google Analytics
- [ ] Change contact form email back to Kim's after testing
- [ ] Add more property photos
- [ ] Consider adding blog for SEO

## Contact

NEO Rental Agent
1927 Cooper Foster Park Rd
Amherst, OH 44001
Phone: (440) 240-8406
Email: Kstrader@neorentalagent.com / Mallen@neorentalagent.com
