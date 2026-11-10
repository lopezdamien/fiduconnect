-- Preserve the existing length checks and the two-coordinate requirement on SEO intake.
alter table public.crm_leads
    add constraint crm_leads_contact_required_check check (
        case when form_source = 'landing_ads' then email is not null or phone is not null
             else email is not null and phone is not null end
    ),
    alter column email drop not null,
    alter column phone drop not null;
